"use client";
import React, { use, useCallback, useEffect, useState, useRef } from "react";

import { observer } from "mobx-react-lite";

import { dataStore } from "@/store/DataStore";
import { favoritesStore } from "@/store/FavoritesStore";

import Product from "@/entities/Product";

import "@/styles/widgets/productsSection.css";
import { usePathname } from "next/navigation";
import Loading from "@/shared/Loading";

interface ProductsSectionProps {
  isFavorites: boolean;
  categoryFilter?: number | null;
  tagFilter?: string | null;
  customTagFilter?: string[];
  searchQuery?: string;
  importanceFilter?: boolean;
  limit?: number;
  showOnMainOnly?: boolean;
}

const ProductsSection: React.FC<ProductsSectionProps> = observer(
  ({
    isFavorites,
    categoryFilter,
    tagFilter,
    customTagFilter,
    searchQuery = "",
    importanceFilter = false,
    limit,
    showOnMainOnly = false,
  }) => {
    const pathname = usePathname() || "";
    const sectionRef = useRef<HTMLElement>(null);
    const loaderRef = useRef<HTMLDivElement>(null);

    const [originalProducts, setOriginalProducts] = useState([] as any[]);
    const [sortedProducts, setSortedProducts] = useState([] as any[]);
    const [isLoad, setIsLoad] = useState<boolean | "pending">("pending");
    const [isDataLoad, setIsDataLoad] = useState<boolean>(false);
    const [visibleCount, setVisibleCount] = useState(12); // Начальное количество отображаемых товаров
    const [loadingMore, setLoadingMore] = useState(false); // Флаг загрузки дополнительных товаров
    const [allLoaded, setAllLoaded] = useState(false); // Флаг, что все товары загружены
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
      setIsClient(true);
    }, []);

    // Функция для безопасного получения цен из параметров продукта
    const getProductPrices = (product: any) => {
      // Проверяем наличие массива параметров и его непустоту
      if (
        !product.parameters ||
        !Array.isArray(product.parameters) ||
        product.parameters.length === 0
      ) {
        return { initialPrice: "", currentPrice: "0" };
      }

      // Находим параметр с пометкой chosen или берем первый
      const chosenParam =
        product.parameters.find((p: any) => p.chosen) || product.parameters[0];

      if (!chosenParam) {
        return { initialPrice: "", currentPrice: "0" };
      }

      // Безопасно извлекаем цены
      const initialPrice = chosenParam.old_price
        ? String(chosenParam.old_price)
        : "";
      const currentPrice = chosenParam.price ? String(chosenParam.price) : "0";

      return { initialPrice, currentPrice };
    };

    const filterProducts = (products: any[], filter: number | null) => {
      if (!filter) return products;
      return products.filter(
        (product) =>
          product.categories &&
          Array.isArray(product.categories) &&
          product.categories.length > 0 &&
          product.categories[0].Category_ID === filter
      );
    };

    const filterCustomProducts = (
      products: any[],
      filters: string[] | null
    ) => {
      if (!filters || filters.length === 0) return products;

      const filteredProducts = products.filter((product) => {
        // Разделим фильтры на "sale" и остальные кастомные теги
        const hasSaleFilter = filters.includes("sale");
        const otherFilters = filters.filter((filter) => filter !== "sale");

        // Проверим, соответствует ли товар фильтру "sale", если он активен
        let matchesSale = true;
        if (hasSaleFilter) {
          const hasSaleMark =
            product.marks &&
            Array.isArray(product.marks) &&
            product.marks.some((mark: any) => {
              const isMatch =
                mark.Mark_Name && mark.Mark_Name.toLowerCase() === "sale";
              return isMatch;
            });

          matchesSale = hasSaleMark;
        }

        // Проверим, соответствует ли товар другим кастомным тегам, если они есть
        let matchesOtherTags = true;
        if (otherFilters.length > 0) {
          // Товар должен соответствовать хотя бы одному из выбранных тегов
          matchesOtherTags =
            product.tags &&
            Array.isArray(product.tags) &&
            otherFilters.some((filter) => product.tags.includes(filter));
        }

        // В режиме отображения товаров со скидкой с дополнительными тегами:
        // товар должен иметь метку sale И соответствовать хотя бы одному из выбранных тегов
        return matchesSale && matchesOtherTags;
      });

      return filteredProducts;
    };

    const filterBySearchQuery = (products: any[], query: string) => {
      if (!query || query.trim() === "") return products;

      // Приводим запрос к нижнему регистру и разбиваем на отдельные слова
      const searchWords = query
        .toLowerCase()
        .trim()
        .split(/\s+/)
        .filter((word) => word.length > 0);

      if (searchWords.length === 0) return products;

      return products.filter((product) => {
        // Если нет названия продукта, пропускаем его
        if (!product.Product_Name) return false;

        // Получаем текст для поиска: название продукта
        const productName = product.Product_Name.toLowerCase();

        // Получаем описание продукта, если оно есть
        let productDescription = "";
        if (
          product.extras &&
          Array.isArray(product.extras) &&
          product.extras.length > 0 &&
          product.extras[0].Characteristics
        ) {
          productDescription = product.extras[0].Characteristics.toLowerCase();
        }

        // Объединяем название и описание для поиска
        const searchText = productName + " " + productDescription;

        // Проверяем, содержит ли текст все слова из запроса
        return searchWords.every((word) => searchText.includes(word));
      });
    };

    const sortProducts = (products: any[], sortType: string | null) => {
      if (!sortType) return [...products];

      switch (sortType) {
        case "Сначала новые":
          return [...products].sort((a, b) => {
            if (!a.Created_At || !b.Created_At) return 0;
            return (
              new Date(b.Created_At).getTime() -
              new Date(a.Created_At).getTime()
            );
          });
        case "Сначала старые":
          return [...products].sort((a, b) => {
            if (!a.Created_At || !b.Created_At) return 0;
            return (
              new Date(a.Created_At).getTime() -
              new Date(b.Created_At).getTime()
            );
          });
        case "Сначала дешевле":
          return [...products].sort((a, b) => {
            const { currentPrice: aCurrentPrice } = getProductPrices(a);
            const { currentPrice: bCurrentPrice } = getProductPrices(b);

            const aPrice = parseFloat(aCurrentPrice) || 0;
            const bPrice = parseFloat(bCurrentPrice) || 0;

            return aPrice - bPrice;
          });
        case "Сначала дороже":
          return [...products].sort((a, b) => {
            const { currentPrice: aCurrentPrice } = getProductPrices(a);
            const { currentPrice: bCurrentPrice } = getProductPrices(b);

            // Преобразуем цены в числа для корректного сравнения
            const aPrice = parseFloat(aCurrentPrice) || 0;
            const bPrice = parseFloat(bCurrentPrice) || 0;

            return bPrice - aPrice;
          });
        case "Сначала популярные":
          return [...products].sort((a, b) => {
            if (a.importance_num !== null && b.importance_num !== null) {
              return b.importance_num - a.importance_num;
            }
            if (a.importance_num !== null) return -1;
            if (b.importance_num !== null) return 1;
            return 0;
          });
        default:
          return [...products];
      }
    };

    const getCorrectArray = useCallback(() => {
      if (isFavorites) {
        return sortedProducts.filter((product: any) =>
          favoritesStore.favoritesIds.includes(product.Product_ID)
        );
      } else {
        return sortedProducts;
      }
    }, [isFavorites, sortedProducts, favoritesStore.favoritesIds]);

    const filterOnMainProducts = useCallback(
      (products: any[]) => {
        if (!showOnMainOnly) return products;
        return products.filter((product) => product.OnMain === true);
      },
      [showOnMainOnly]
    );

    useEffect(() => {
      let result = [...originalProducts] as any[];

      if (showOnMainOnly) {
        result = filterOnMainProducts(result);
      }

      if (categoryFilter) {
        result = filterProducts(result, categoryFilter);
      }

      if (tagFilter) {
        result = sortProducts(result, tagFilter);
      }

      if (customTagFilter && customTagFilter.length > 0) {
        result = filterCustomProducts(result, customTagFilter);
      }

      if (searchQuery) {
        result = filterBySearchQuery(result, searchQuery);
      }

      if (importanceFilter) {
        result = [...result].sort((a, b) => {
          if (a.importance_num !== null && b.importance_num !== null) {
            return b.importance_num - a.importance_num;
          }
          if (a.importance_num !== null) return -1;
          if (b.importance_num !== null) return 1;
          return 0;
        });
      }

      setSortedProducts(result);
    }, [
      originalProducts,
      categoryFilter,
      tagFilter,
      customTagFilter,
      searchQuery,
      importanceFilter,
      showOnMainOnly,
    ]);

    useEffect(() => {
      if (Object.entries(dataStore.data).length) {
        setIsDataLoad(true);
        setOriginalProducts(dataStore.data?.products || []);
        setSortedProducts(dataStore.data?.products || []);
      } else {
        setIsDataLoad(false);
      }
    }, [dataStore.data]);

    useEffect(() => {
      if (isDataLoad) {
        const productsArray = getCorrectArray();
        setIsLoad(productsArray.length > 0);
      }
    }, [getCorrectArray, isDataLoad]);

    useEffect(() => {
      if (pathname.includes("shoppingcart")) {
        // Ничего не делаем, так как limit теперь является prop
      }
    }, [pathname]);

    // Функция для загрузки дополнительных товаров
    const loadMoreProducts = useCallback(() => {
      if (loadingMore || allLoaded) return;

      setLoadingMore(true);

      // Имитация задержки загрузки для плавности
      setTimeout(() => {
        const currentArray = getCorrectArray();
        // Если достигли конца списка или задан лимит, не загружаем больше
        if (
          visibleCount >= currentArray.length ||
          (limit && visibleCount >= limit)
        ) {
          setAllLoaded(true);
        } else {
          // Загружаем следующие 12 товаров
          setVisibleCount((prevCount) =>
            Math.min(prevCount + 12, limit || currentArray.length)
          );
        }
        setLoadingMore(false);
      }, 300);
    }, [visibleCount, loadingMore, allLoaded, getCorrectArray, limit]);

    // Настройка наблюдателя за прокруткой
    useEffect(() => {
      if (!loaderRef.current || !isClient) return;

      const observer = new IntersectionObserver(
        (entries) => {
          if (entries[0].isIntersecting && !loadingMore && !allLoaded) {
            loadMoreProducts();
          }
        },
        { threshold: 0.1 } // Начинаем загрузку, когда видно 10% загрузчика
      );

      observer.observe(loaderRef.current);

      return () => {
        if (loaderRef.current) {
          observer.unobserve(loaderRef.current);
        }
      };
    }, [loadMoreProducts, loadingMore, allLoaded, isClient]);

    // Сбрасываем счетчики при изменении фильтров
    useEffect(() => {
      setVisibleCount(12);
      setAllLoaded(false);
    }, [
      categoryFilter,
      tagFilter,
      customTagFilter,
      searchQuery,
      showOnMainOnly,
    ]);

    return (
      <section className="productsSection" ref={sectionRef}>
        {isLoad === false ? (
          <div className="no-products-message">товар не найден</div>
        ) : isLoad === "pending" ? (
          <Loading />
        ) : (
          <>
            <div className="productsSection-grid">
              {getCorrectArray()
                .slice(0, limit ? Math.min(visibleCount, limit) : visibleCount)
                .map((product: any, index: number) => {
                  if (!product || !product.Product_ID) {
                    return null;
                  }

                  const { initialPrice, currentPrice } =
                    getProductPrices(product);
                  return (
                    <Product
                      key={`${product.Product_ID}-${index}`}
                      id={product.Product_ID}
                      tag={
                        product.marks &&
                        Array.isArray(product.marks) &&
                        product.marks.length > 0
                          ? product.marks[0].Mark_Name
                          : ""
                      }
                      images={
                        Array.isArray(product.images) ? product.images : []
                      }
                      initialPrice={initialPrice}
                      currentPrice={currentPrice}
                      title={product.Product_Name || ""}
                      categoryId={
                        product.categories &&
                        Array.isArray(product.categories) &&
                        product.categories.length > 0
                          ? product.categories[0].Category_ID
                          : 0
                      }
                    />
                  );
                })}
            </div>

            {/* Индикатор загрузки дополнительных товаров */}
            {!allLoaded &&
              isLoad === true &&
              getCorrectArray().length > visibleCount && (
                <div ref={loaderRef} className="productsSection-loader">
                  {loadingMore && <Loading />}
                </div>
              )}
          </>
        )}
      </section>
    );
  }
);

export default ProductsSection;

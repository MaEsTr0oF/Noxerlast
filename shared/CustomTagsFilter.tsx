"use client";
import React, { useEffect, useRef, useState } from "react";
import { observer } from "mobx-react-lite";
import { dataStore } from "@/store/DataStore";

import "@/styles/shared/tagsFilter.css";
import Loading from "./Loading";

interface CustomTagsFilterProps {
  activeCustomTag: string[];
  onCustomTagChange: (tag: string) => void;
  activeCategory?: string | null;
}

const CustomTagsFilter: React.FC<CustomTagsFilterProps> = observer(
  ({ activeCustomTag, onCustomTagChange, activeCategory }) => {
    const [isClient, setIsClient] = useState(false);
    const [activeCategoryTags, setActiveCategoryTags] = useState<{
      [key: string]: number;
    }>({});
    const [isLoading, setIsLoading] = useState(true);
    const tagRefs = useRef<(HTMLDivElement | null)[]>([]);
    const containerRef = useRef<HTMLDivElement>(null);
    const [visibleTagCount, setVisibleTagCount] = useState(0);
    const [allTagsAreVisible, setAllTagsAreVisible] = useState(false);
    const [movingTag, setMovingTag] = useState<string | null>(null);
    const [animating, setAnimating] = useState(false);

    // Обработчик клика по тегу с анимацией
    const handleTagClick = (tagName: string) => {
      if (animating) return; // Избегаем двойных кликов во время анимации

      const isAlreadyActive = activeCustomTag.includes(tagName);

      // Проверка, является ли тег "sale" тегом
      const isSaleTag = tagName.toLowerCase() === "sale";

      if (!isAlreadyActive) {
        // Если тег активируется, запускаем анимацию
        setMovingTag(tagName);
        setAnimating(true);

        // Даем время CSS-анимации
        setTimeout(() => {
          // Вызываем обработчик изменения тега
          onCustomTagChange(tagName);

          // После завершения анимации сбрасываем состояние
          setTimeout(() => {
            setMovingTag(null);
            setAnimating(false);
          }, 400); // Время анимации
        }, 200);
      } else {
        // Если тег деактивируется, просто вызываем обработчик без анимации
        onCustomTagChange(tagName);
      }
    };

    // Функция для прокрутки к активному тегу
    const scrollToActiveTag = () => {
      if (!isClient || !containerRef.current || activeCustomTag.length === 0)
        return;

      // Находим индекс первого активного тега
      const activeTagIndex = Object.keys(activeCategoryTags).findIndex((tag) =>
        activeCustomTag.includes(tag)
      );

      if (activeTagIndex !== -1 && tagRefs.current[activeTagIndex]) {
        const activeTagElement = tagRefs.current[activeTagIndex];
        if (activeTagElement) {
          // Прокручиваем к активному тегу
          activeTagElement.scrollIntoView({
            behavior: "smooth",
            block: "nearest",
            inline: "center",
          });
        }
      }
    };

    useEffect(() => {
      setIsClient(true);
    }, []);

    useEffect(() => {
      if (!isClient) return;

      const timer = setTimeout(() => {
        let categoryTags: { [key: string]: number } = {};

        if (!dataStore.data?.overall_product_tags_by_category) {
          setActiveCategoryTags({});
          setIsLoading(false);
          return;
        }

        if (!activeCategory) {
          Object.entries(
            dataStore.data.overall_product_tags_by_category
          ).forEach(([, categoryTagsObj]) => {
            if (categoryTagsObj) {
              Object.entries(categoryTagsObj).forEach(([tagName, count]) => {
                if (categoryTags[tagName]) {
                  categoryTags[tagName] += count as number;
                } else {
                  categoryTags[tagName] = count as number;
                }
              });
            }
          });
        } else {
          categoryTags =
            dataStore.data.overall_product_tags_by_category[activeCategory] ||
            {};
        }

        // Добавляем специальный тег "Sale" для товаров со скидкой
        // Получаем количество товаров со скидкой из данных
        let saleItemsCount = 0;

        interface ProductMark {
          Mark_Name?: string;
          [key: string]: any;
        }

        interface Product {
          marks?: ProductMark[];
          categories?: Array<{ Category_ID: number }>;
          tags?: string[];
          [key: string]: any;
        }

        if (
          dataStore.data?.products &&
          Array.isArray(dataStore.data.products)
        ) {
          // Фильтруем продукты по текущей категории, если она выбрана
          let filteredProducts = dataStore.data.products;
          if (activeCategory) {
            const activeCategoryId = parseInt(activeCategory, 10);
            filteredProducts = filteredProducts.filter(
              (product: Product) =>
                product.categories &&
                Array.isArray(product.categories) &&
                product.categories.some(
                  (cat) => cat.Category_ID === activeCategoryId
                )
            );
          }

          // Проверяем, есть ли "sale" в активных тегах
          const isSaleActive = activeCustomTag.includes("sale");

          // Находим товары со скидкой
          const saleProducts = filteredProducts.filter(
            (product: Product) =>
              product.marks &&
              Array.isArray(product.marks) &&
              product.marks.some(
                (mark: ProductMark) =>
                  mark.Mark_Name && mark.Mark_Name.toLowerCase() === "sale"
              )
          );

          saleItemsCount = saleProducts.length;

          // Если "sale" активен, перестраиваем список тегов
          if (isSaleActive && saleItemsCount > 0) {
            // Собираем теги, которые есть в товарах со скидкой
            const tagsInSaleProducts: { [key: string]: number } = {};

            // Всегда добавляем "sale" тег
            tagsInSaleProducts["sale"] = saleItemsCount;

            // Подсчитываем встречаемость других тегов в товарах со скидкой
            saleProducts.forEach((product: Product) => {
              if (product.tags && Array.isArray(product.tags)) {
                product.tags.forEach((tag) => {
                  if (tag.toLowerCase() !== "sale") {
                    // Исключаем сам тег sale
                    if (tagsInSaleProducts[tag]) {
                      tagsInSaleProducts[tag]++;
                    } else {
                      tagsInSaleProducts[tag] = 1;
                    }
                  }
                });
              }
            });

            // Заменяем список тегов только на те, которые есть в товарах со скидкой
            categoryTags = tagsInSaleProducts;
          }
          // Если "sale" не активен, добавляем его как обычно
          else if (saleItemsCount > 0) {
            categoryTags["sale"] = saleItemsCount;
          }
        }

        setActiveCategoryTags(categoryTags);
        setIsLoading(false);

        // Если есть активные теги, делаем все теги видимыми, чтобы активные теги были видны
        if (activeCustomTag.length > 0) {
          setAllTagsAreVisible(true);
          setVisibleTagCount(Object.keys(categoryTags).length);
        } else if (categoryTags && Object.keys(categoryTags).length > 0) {
          setVisibleTagCount(Object.keys(categoryTags).length);
        } else {
          setVisibleTagCount(0);
        }
      }, 500);

      return () => clearTimeout(timer);
    }, [activeCategory, dataStore.data, isClient, activeCustomTag]);

    // Добавляем эффект для отслеживания изменений в активных тегах
    useEffect(() => {
      if (
        !isClient ||
        isLoading ||
        Object.keys(activeCategoryTags).length === 0
      )
        return;

      // Если есть активные теги, делаем все теги видимыми
      if (activeCustomTag.length > 0) {
        setAllTagsAreVisible(true);
        setVisibleTagCount(Object.keys(activeCategoryTags).length);

        // Прокручиваем к активному тегу после небольшой задержки,
        // чтобы дать время для рендеринга
        setTimeout(() => {
          scrollToActiveTag();
        }, 300);
      }
    }, [activeCustomTag, isClient, isLoading, activeCategoryTags]);

    // Эффект для прокрутки к активному тегу после полной загрузки компонента
    useEffect(() => {
      if (isClient && !isLoading && activeCustomTag.length > 0) {
        setTimeout(() => {
          scrollToActiveTag();
        }, 500);
      }
    }, [isClient, isLoading]);

    if (!isClient) {
      return (
        <div className="tagsFilter custom-tagsFilter tagsFilter-loading">
          <Loading />
        </div>
      );
    }

    if (isLoading) {
      return (
        <div className="tagsFilter custom-tagsFilter tagsFilter-loading">
          <Loading />
        </div>
      );
    }

    if (Object.keys(activeCategoryTags).length === 0) {
      return (
        <div className="tagsFilter custom-tagsFilter tagsFilter-empty">
          <div className="tagsFilter-empty-message">Нет доступных тегов</div>
        </div>
      );
    }

    // Сортируем теги так, чтобы "sale" и активные были вначале
    const allTagsArray = Object.entries(activeCategoryTags).sort((a, b) => {
      // Специальный тег "sale" всегда в начале
      if (a[0].toLowerCase() === "sale") return -1;
      if (b[0].toLowerCase() === "sale") return 1;

      // Затем идут активные теги
      const isAActive = activeCustomTag.includes(a[0]);
      const isBActive = activeCustomTag.includes(b[0]);
      if (isAActive && !isBActive) return -1;
      if (!isAActive && isBActive) return 1;
      return 0;
    });

    const tagsToDisplay = allTagsAreVisible ? allTagsArray : allTagsArray;

    const showMoreButton = false; // Убираем кнопку "Ещё", так как теперь используем слайдер
    const showHideButton = false; // Убираем кнопку "Скрыть"

    return (
      <div className="tagsFilter custom-tagsFilter">
        <div ref={containerRef} className="slider-container">
          {tagsToDisplay.map(([tagName, count], index) => (
            <div
              key={index}
              ref={(el) => {
                tagRefs.current[index] = el;
              }}
              suppressHydrationWarning
              className={`tagsFilter-tag slider-item
                ${activeCustomTag.includes(tagName) ? "tagsFilter-tag--active" : ""} 
                ${tagName.toLowerCase() === "sale" ? "tagsFilter-tag--sale" : ""}
                ${movingTag === tagName ? "tagsFilter-tag--moving-front" : ""}
                ${movingTag && movingTag !== tagName && index < 3 ? "tagsFilter-tag--shifting" : ""}
              `}
              onClick={() => handleTagClick(tagName)}
            >
              <p className="tagsFilter-tag-title">
                {tagName.toLowerCase() === "sale" ? "Sale" : tagName}
                {!activeCustomTag.includes(tagName) ? (
                  <span className="tagsFilter-tag-count">{count}</span>
                ) : (
                  <span className="tagsFilter-tag-close">
                    <svg
                      width="10"
                      height="10"
                      viewBox="0 0 9 10"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M1 8.5L8 1.5"
                        stroke="#ffffff"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M8 8.5L1 1.5"
                        stroke="#ffffff"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                )}
              </p>
            </div>
          ))}
        </div>
      </div>
    );
  }
);

export default CustomTagsFilter;

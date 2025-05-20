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
    const [initialCalculatedTagCount, setInitialCalculatedTagCount] =
      useState(0);
    const [allTagsAreVisible, setAllTagsAreVisible] = useState(false);
    const [tagWidths, setTagWidths] = useState<number[]>([]);
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
          // Прокручиваем контейнер так, чтобы активный тег был виден
          const container = containerRef.current;
          const tagRect = activeTagElement.getBoundingClientRect();
          const containerRect = container.getBoundingClientRect();

          // Вычисляем позицию для прокрутки, чтобы тег был по центру
          const scrollLeft =
            activeTagElement.offsetLeft -
            containerRect.width / 2 +
            tagRect.width / 2;

          // Плавная прокрутка к тегу
          container.scrollTo({
            left: scrollLeft,
            behavior: "smooth",
          });
        }
      }
    };

    useEffect(() => {
      setIsClient(true);
    }, []);

    // useEffect для измерения ширин тегов
    useEffect(() => {
      if (
        !isClient ||
        isLoading ||
        Object.keys(activeCategoryTags).length === 0
      ) {
        if (Object.keys(activeCategoryTags).length === 0) {
          setTagWidths([]);
        }
        return;
      }

      const measureTagWidths = () => {
        const currentTotalTags = Object.keys(activeCategoryTags).length;
        let allRefsAvailable = tagRefs.current.length >= currentTotalTags;
        if (allRefsAvailable) {
          for (let i = 0; i < currentTotalTags; i++) {
            if (!tagRefs.current[i]) {
              allRefsAvailable = false;
              break;
            }
          }
        }

        if (allRefsAvailable) {
          const newWidths = Array(currentTotalTags);
          for (let i = 0; i < currentTotalTags; i++) {
            newWidths[i] = tagRefs.current[i]!.offsetWidth;
          }
          setTagWidths(newWidths);
        } else {
        }
      };

      const measurementTimeoutId = setTimeout(measureTagWidths, 50);

      return () => clearTimeout(measurementTimeoutId);
    }, [isClient, isLoading, activeCategoryTags]);

    useEffect(() => {
      if (
        !isClient ||
        typeof window === "undefined" ||
        isLoading ||
        Object.keys(activeCategoryTags).length === 0 ||
        tagWidths.length === 0 ||
        tagWidths.length !== Object.keys(activeCategoryTags).length
      ) {
        return;
      }

      const calculateMaxTags = () => {
        let currentViewportWidth = window.innerWidth;
        const maxContainerWidth = 600;
        const moreButtonWidth = 37;
        const tagMargin = 5;

        if (currentViewportWidth > maxContainerWidth) {
          currentViewportWidth = maxContainerWidth;
        }

        const tagsEntries = Object.entries(activeCategoryTags);
        const totalTags = tagsEntries.length;

        if (totalTags === 0) {
          setInitialCalculatedTagCount(0);
          setVisibleTagCount(0);
          return;
        }

        const countFittingTags = (
          availableWidth: number,
          maxTagsToConsider: number = totalTags
        ): number => {
          let fitCount = 0;
          let currentWidthSum = 0;
          for (let i = 0; i < maxTagsToConsider; i++) {
            const tagWidth = tagWidths[i];
            if (typeof tagWidth === "number") {
              const widthWithMargin = tagWidth + (fitCount > 0 ? tagMargin : 0);
              if (currentWidthSum + widthWithMargin <= availableWidth) {
                currentWidthSum += widthWithMargin;
                fitCount++;
              } else {
                break;
              }
            } else {
              break;
            }
          }
          return fitCount;
        };

        let numTagsToSetVisible = 0;
        let countForInitialAndMoreButtonText = 0;

        if (allTagsAreVisible) {
          numTagsToSetVisible = totalTags;
          let baseFitForHiddenState = countFittingTags(currentViewportWidth);
          if (baseFitForHiddenState < totalTags) {
            const spaceForMoreBtn =
              moreButtonWidth +
              (countFittingTags(currentViewportWidth - moreButtonWidth) > 0
                ? tagMargin
                : 0);
            let fitWithMoreBtnInHiddenState = countFittingTags(
              currentViewportWidth - spaceForMoreBtn
            );
            countForInitialAndMoreButtonText =
              fitWithMoreBtnInHiddenState > 0
                ? fitWithMoreBtnInHiddenState
                : baseFitForHiddenState;
          } else {
            countForInitialAndMoreButtonText = baseFitForHiddenState;
          }
        } else {
          let tagsFittingWithoutMoreBtn =
            countFittingTags(currentViewportWidth);

          if (tagsFittingWithoutMoreBtn < totalTags) {
            const spaceRequiredForMoreButton =
              moreButtonWidth +
              (countFittingTags(currentViewportWidth - moreButtonWidth) > 0
                ? tagMargin
                : 0);

            let tagsFittingWithMoreBtnPlaceholder = countFittingTags(
              currentViewportWidth - spaceRequiredForMoreButton
            );

            if (tagsFittingWithMoreBtnPlaceholder > 0) {
              numTagsToSetVisible = tagsFittingWithMoreBtnPlaceholder;
              countForInitialAndMoreButtonText =
                tagsFittingWithMoreBtnPlaceholder;
            } else if (tagsFittingWithoutMoreBtn > 0) {
              numTagsToSetVisible = tagsFittingWithoutMoreBtn;
              countForInitialAndMoreButtonText = tagsFittingWithoutMoreBtn;
            } else {
              numTagsToSetVisible = 0;
              countForInitialAndMoreButtonText = 0;
            }
          } else {
            numTagsToSetVisible = tagsFittingWithoutMoreBtn;
            countForInitialAndMoreButtonText = tagsFittingWithoutMoreBtn;
          }
        }

        setInitialCalculatedTagCount(countForInitialAndMoreButtonText);
        setVisibleTagCount(numTagsToSetVisible);
      };

      const timerId = setTimeout(calculateMaxTags, 50);

      window.addEventListener("resize", calculateMaxTags);

      return () => {
        clearTimeout(timerId);
        window.removeEventListener("resize", calculateMaxTags);
      };
    }, [isClient, activeCategoryTags, isLoading, allTagsAreVisible, tagWidths]);

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

          // Доступные специальные теги
          const specialTags = ["sale", "premium", "new", "hit", "hot"];

          // Добавляем все специальные теги в categoryTags
          specialTags.forEach((specialTag) => {
            // Проверяем, активен ли этот тег
            const isTagActive = activeCustomTag.includes(specialTag);

            // Находим товары с этим тегом
            const taggedProducts = filteredProducts.filter(
              (product: Product) =>
                product.marks &&
                Array.isArray(product.marks) &&
                product.marks.some(
                  (mark: ProductMark) =>
                    mark.Mark_Name &&
                    mark.Mark_Name.toLowerCase() === specialTag
                )
            );

            const taggedItemsCount = taggedProducts.length;

            // Если тег активен или есть товары с этим тегом, добавляем его в categoryTags
            if ((isTagActive && taggedItemsCount > 0) || taggedItemsCount > 0) {
              categoryTags[specialTag] = taggedItemsCount;
            }
          });
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
        setInitialCalculatedTagCount(0);
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
          <div className="tagsFilter-empty-message"></div>
        </div>
      );
    }

    // Сортируем теги так, чтобы специальные теги и активные были вначале
    const allTagsArray = Object.entries(activeCategoryTags).sort((a, b) => {
      // Список специальных тегов
      const specialTags = ["sale", "premium", "new", "hit", "hot"];

      // Проверяем, являются ли теги специальными
      const isASpecial = specialTags.includes(a[0].toLowerCase());
      const isBSpecial = specialTags.includes(b[0].toLowerCase());

      // Если оба тега специальные, сортируем по порядку в массиве specialTags
      if (isASpecial && isBSpecial) {
        return (
          specialTags.indexOf(a[0].toLowerCase()) -
          specialTags.indexOf(b[0].toLowerCase())
        );
      }

      // Специальные теги всегда в начале
      if (isASpecial) return -1;
      if (isBSpecial) return 1;

      // Затем идут активные теги
      const isAActive = activeCustomTag.includes(a[0]);
      const isBActive = activeCustomTag.includes(b[0]);
      if (isAActive && !isBActive) return -1;
      if (!isAActive && isBActive) return 1;
      return 0;
    });

    const tagsToDisplay = allTagsArray.slice(
      0,
      visibleTagCount === 0 &&
        !allTagsAreVisible &&
        initialCalculatedTagCount === 0
        ? 0
        : visibleTagCount
    );
    const showMoreButton =
      !allTagsAreVisible &&
      allTagsArray.length > initialCalculatedTagCount &&
      initialCalculatedTagCount > 0;
    const showHideButton =
      allTagsAreVisible &&
      allTagsArray.length > initialCalculatedTagCount &&
      allTagsArray.length > 1;

    return (
      <div className="tagsFilter custom-tagsFilter">
        <div
          ref={containerRef}
          className={`custom-tagsFilter-tags ${showHideButton ? "custom-tagsFilter-tags--open" : ""}`}
        >
          {tagsToDisplay.map(([tagName, count], index) => (
            <div
              key={index}
              ref={(el) => {
                tagRefs.current[index] = el;
              }}
              suppressHydrationWarning
              className={`tagsFilter-tag 
                ${activeCustomTag.includes(tagName) ? "tagsFilter-tag--active" : ""} 
                ${tagName.toLowerCase() === "sale" ? "tagsFilter-tag--sale" : ""}
                ${tagName.toLowerCase() === "premium" ? "tagsFilter-tag--premium" : ""}
                ${tagName.toLowerCase() === "new" ? "tagsFilter-tag--new" : ""}
                ${tagName.toLowerCase() === "hit" ? "tagsFilter-tag--hit" : ""}
                ${tagName.toLowerCase() === "hot" ? "tagsFilter-tag--hot" : ""}
                ${movingTag === tagName ? "tagsFilter-tag--moving-front" : ""}
                ${movingTag && movingTag !== tagName && index < 3 ? "tagsFilter-tag--shifting" : ""}
              `}
              onClick={() => handleTagClick(tagName)}
            >
              <p className="tagsFilter-tag-title">
                {tagName.toLowerCase() === "sale"
                  ? "Sale"
                  : tagName.toLowerCase() === "premium"
                    ? "Premium"
                    : tagName.toLowerCase() === "new"
                      ? "New"
                      : tagName.toLowerCase() === "hit"
                        ? "Хит"
                        : tagName.toLowerCase() === "hot"
                          ? "Hot"
                          : tagName}
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

          {showHideButton && (
            <button
              className=" tagsFilter-hideButton"
              onClick={() => {
                setAllTagsAreVisible(false);
                setVisibleTagCount(initialCalculatedTagCount);
              }}
            >
              <p>Скрыть</p>
            </button>
          )}
        </div>
        {showMoreButton && (
          <button
            className="tagsFilter-moreButton"
            onClick={() => {
              setAllTagsAreVisible(true);
              setVisibleTagCount(allTagsArray.length);
            }}
          >
            <p> Ещё ({allTagsArray.length - initialCalculatedTagCount})</p>
          </button>
        )}
      </div>
    );
  }
);

export default CustomTagsFilter;

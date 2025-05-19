"use client";
import React, { useEffect, useRef } from "react";

import { useCategories } from "@/data/categories";

import Slider from "@/shared/Slider";

import "@/styles/shared/categoryFilter.css";

interface CategoryFilterProps {
  activeCategory: number | null;
  onCategoryChange: (categoryId: number) => void;
}

interface Category {
  Category_ID: number;
  Category_Image: string;
  Category_Name: string;
}

const CategoryFilter: React.FC<CategoryFilterProps> = ({
  activeCategory,
  onCategoryChange,
}) => {
  // Получаем актуальные данные категорий с помощью хука
  const categories = useCategories();
  const containerRef = useRef<HTMLDivElement>(null);
  const categoryRefs = useRef<(HTMLDivElement | null)[]>([]);

  // Новая функция для прокрутки к активной категории
  const scrollToActiveCategory = () => {
    if (!activeCategory || !containerRef.current) return;

    // Находим индекс активной категории
    const activeCategoryIndex = categories.findIndex(
      (cat: Category) => cat.Category_ID === activeCategory
    );

    // Если нашли категорию и есть ссылка на DOM-элемент
    if (
      activeCategoryIndex !== -1 &&
      categoryRefs.current[activeCategoryIndex]
    ) {
      const activeElement = categoryRefs.current[activeCategoryIndex];

      // Проверяем, что элемент существует
      if (activeElement) {
        // Находим контейнер со скроллом
        const scrollContainer =
          containerRef.current.querySelector(".slider-container");

        if (scrollContainer) {
          // Прокручиваем элемент в видимую область
          activeElement.scrollIntoView({
            behavior: "smooth",
            block: "nearest",
            inline: "center",
          });
        }
      }
    }
  };

  // Вызываем скролл при изменении активной категории или списка категорий
  useEffect(() => {
    if (activeCategory && categories.length > 0) {
      // Задержка для уверенности, что DOM готов
      setTimeout(scrollToActiveCategory, 300);
    }
  }, [activeCategory, categories]);

  // Обработчик клика по категории
  const handleCategoryClick = (categoryId: number) => {
    onCategoryChange(categoryId);

    // Если выбирается новая категория (не снимается выбор), скроллим к ней
    if (categoryId !== activeCategory) {
      setTimeout(scrollToActiveCategory, 50);
    }
  };

  return (
    <div className="categoryFilter" ref={containerRef}>
      <Slider height={"38px"}>
        {categories.map((category: Category, index: number) => (
          <div
            key={category.Category_ID}
            ref={(el) => {
              categoryRefs.current[index] = el;
            }}
            className={`categoryFilter-tag ${
              activeCategory === category.Category_ID
                ? "categoryFilter-tag--active"
                : ""
            }`}
            onClick={() => handleCategoryClick(category.Category_ID)}
          >
            <img src={category.Category_Image} alt="" />

            <p className="categoryFilter-tag-title">{category.Category_Name}</p>

            {activeCategory === category.Category_ID && (
              <button
                className="categoryFilter-tag-closeButton"
                onClick={(e) => {
                  e.stopPropagation();
                  onCategoryChange(category.Category_ID);
                }}
              >
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
              </button>
            )}
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default CategoryFilter;

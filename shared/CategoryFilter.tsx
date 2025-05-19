"use client";
import React, { useEffect, useRef, useState } from "react";

import { useCategories } from "@/data/categories";

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
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  // Функция для прокрутки к активной категории
  const scrollToActiveCategory = () => {
    if (!isClient || !containerRef.current || activeCategory === null) return;

    const activeCategoryIndex = categories.findIndex(
      (category) => category.Category_ID === activeCategory
    );

    if (
      activeCategoryIndex !== -1 &&
      categoryRefs.current[activeCategoryIndex]
    ) {
      const activeCategoryElement = categoryRefs.current[activeCategoryIndex];
      if (activeCategoryElement) {
        // Прокручиваем к активной категории
        activeCategoryElement.scrollIntoView({
          behavior: "smooth",
          block: "nearest",
          inline: "center",
        });
      }
    }
  };

  // Эффект для прокрутки к активной категории после загрузки
  useEffect(() => {
    if (isClient && activeCategory !== null) {
      setTimeout(() => {
        scrollToActiveCategory();
      }, 300);
    }
  }, [isClient, activeCategory]);

  return (
    <div className="categoryFilter">
      <div ref={containerRef} className="slider-container">
        {categories.map((category: Category, index) => (
          <div
            key={category.Category_ID}
            ref={(el) => {
              categoryRefs.current[index] = el;
            }}
            className={`categoryFilter-tag slider-item ${activeCategory === category.Category_ID ? "categoryFilter-tag--active" : ""}`}
            onClick={() => onCategoryChange(category.Category_ID)}
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
      </div>
    </div>
  );
};

export default CategoryFilter;

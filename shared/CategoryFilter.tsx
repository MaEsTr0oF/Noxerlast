"use client";
import React from "react";

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

  return (
    <div className="categoryFilter">
      <Slider height={"38px"}>
        {categories.map((category: Category) => (
          <div
            key={category.Category_ID}
            className={`categoryFilter-tag ${activeCategory === category.Category_ID ? "categoryFilter-tag--active" : ""}`}
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
      </Slider>
    </div>
  );
};

export default CategoryFilter;

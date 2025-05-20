"use client";
import React, { useEffect, useState } from "react";

import { useSearchParams } from "next/navigation";

import CategoryFilter from "@/shared/CategoryFilter";
import TagsFilter from "@/shared/TagsFilter";
import CustomTagsFilter from "@/shared/CustomTagsFilter";

interface FiltersProps {
  activeTag: any;
  activeCategory: any;
  activeCustomTag: string[];
  setActiveTag: (tag: any) => any;
  setActiveCategory: (category: any) => any;
  setActiveCustomTag: (tags: string[]) => void;
  showTagFilter: boolean;
  showCategoryFilter: boolean;
  showCustomTags?: boolean;
  handleTagChange: (tag: any) => void;
  handleCategoryChange: (category: any) => void;
  handleCustomTagChange: (tag: any) => void;
}

const Filters: React.FC<FiltersProps> = ({
  activeCustomTag,
  activeTag,
  activeCategory,
  setActiveCustomTag,
  setActiveTag,
  setActiveCategory,
  showTagFilter,
  showCategoryFilter,
  showCustomTags = false,
  handleTagChange,
  handleCategoryChange,
  handleCustomTagChange,
}) => {
  const searchParams = useSearchParams();
  const [initialLoadDone, setInitialLoadDone] = useState(false);

  // Обработка URL-параметров при первой загрузке
  useEffect(() => {
    if (initialLoadDone) return;

    const tagParam = searchParams?.get("tag");
    const categoryParam = searchParams?.get("category");

    // Обрабатываем параметр tag
    if (tagParam) {
      const availableTags = ["sale", "premium", "new", "hit", "hot"];

      if (availableTags.includes(tagParam.toLowerCase())) {
        // Если это один из специальных тегов, добавляем его в activeCustomTag
        if (!activeCustomTag.includes(tagParam.toLowerCase())) {
          handleCustomTagChange(tagParam.toLowerCase());
        }
      } else {
        // Для других тегов используем обычный обработчик
        setActiveTag(tagParam);
      }
    }

    // Обрабатываем параметр category
    if (categoryParam) {
      const categoryId = Number(categoryParam);
      setActiveCategory(categoryId);
    }

    setInitialLoadDone(true);
  }, [
    searchParams,
    setActiveTag,
    setActiveCategory,
    handleCustomTagChange,
    activeCustomTag,
    initialLoadDone,
  ]);

  return (
    <>
      <div
        className={`filters-panel ${showCategoryFilter ? "filters-panel--visible" : ""}`}
        suppressHydrationWarning
      >
        <div
          className={`category-container ${showCategoryFilter ? "category-container--visible" : ""}`}
          suppressHydrationWarning
        >
          <CategoryFilter
            activeCategory={activeCategory}
            onCategoryChange={handleCategoryChange}
          />
        </div>
      </div>

      <div
        className={`filters-panel ${showTagFilter ? "filters-panel--visible" : ""}`}
        suppressHydrationWarning
      >
        <div
          className={`tags-container ${showTagFilter ? "tags-container--visible" : ""}`}
          suppressHydrationWarning
        >
          <TagsFilter activeTag={activeTag} onTagChange={handleTagChange} />
        </div>
      </div>

      <div
        className={`filters-panel custom-filters-panel ${showCustomTags ? "filters-panel--visible" : ""}`}
        suppressHydrationWarning
      >
        <div
          className={`tags-container ${showCustomTags ? "tags-container--visible" : ""}`}
          suppressHydrationWarning
        >
          <CustomTagsFilter
            activeCustomTag={activeCustomTag}
            onCustomTagChange={handleCustomTagChange}
            activeCategory={activeCategory ? activeCategory.toString() : null}
          />
        </div>
      </div>
    </>
  );
};

export default Filters;

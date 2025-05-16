"use client";
import React, { useEffect } from "react";

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

  useEffect(() => {
    if (searchParams && searchParams.get("tag")) {
      setActiveTag(searchParams.get("tag")!);
    }
    if (searchParams && searchParams.get("category")) {
      setActiveCategory(Number(searchParams.get("category")));
    }
  }, []);
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

          {/*<SubCategoryFilter*/}
          {/*  activeCategory={activeCategory}*/}
          {/*  onCategoryChange={handleCategoryChange}*/}
          {/*/>*/}
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

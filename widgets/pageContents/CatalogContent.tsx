"use client";
import React, { useState, useRef, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";

import { iconsBaseLink } from "@/utils/globalVariables";

import ru from "@/messages/ru.json";

import ProductsSection from "@/widgets/sections/ProductsSection";
import Filters from "@/widgets/filters/Filters";

import Search from "@/shared/Search";

import "@/styles/widgets/catalog.css";
import { detectIOS } from "@/utils/detectIOS";

const STORAGE_KEYS = {
  ACTIVE_CATEGORY: "brandbot_active_category",
  ACTIVE_TAG: "brandbot_active_tag",
  ACTIVE_CUSTOM_TAG: "brandbot_active_custom_tag",
  SHOW_CATEGORY_FILTER: "brandbot_show_category_filter",
  SHOW_TAG_FILTER: "brandbot_show_tag_filter",
  SHOW_CUSTOM_TAG_FILTER: "brandbot_show_custom_tag_filter",
  SEARCH_QUERY: "brandbot_search_query",
  SHOW_SEARCH: "brandbot_show_search",
};

const CatalogContent = () => {
  const [isClient, setIsClient] = useState(false);
  const searchParams = useSearchParams();

  const getStoredValue = (key: string, defaultValue: any) => {
    if (typeof window !== "undefined") {
      const storedValue = localStorage.getItem(key);
      if (storedValue !== null) {
        try {
          return JSON.parse(storedValue);
        } catch (e) {
          console.error("Ошибка при парсинге данных из localStorage", e);
          return defaultValue;
        }
      }
    }
    return defaultValue;
  };

  const [searchQuery, setSearchQuery] = useState<string>("");
  const [activeCategory, setActiveCategory] = useState<number | null>(null);
  const [activeTag, setActiveTag] = useState<string | null>(null);
  const [activeCustomTag, setActiveCustomTag] = useState<string[]>([]);
  const [showCategoryFilter, setShowCategoryFilter] = useState<boolean>(true);
  const [showTagFilter, setShowTagFilter] = useState<boolean>(false);
  const [showCustomTags, setShowCustomTags] = useState<boolean>(false);
  const [showSearch, setShowSearch] = useState<boolean>(false);

  useEffect(() => {
    console.log(
      "URL params:",
      searchParams ? Object.fromEntries(searchParams.entries()) : {}
    );

    const getHashParam = (name: string) => {
      if (typeof window !== "undefined") {
        const hash = window.location.hash;
        console.log("Текущий хеш URL:", hash);
        if (hash && hash.includes("?")) {
          const params = new URLSearchParams(hash.split("?")[1]);
          const value = params.get(name);
          console.log(`Значение параметра ${name} из хеша:`, value);
          return value;
        }
      }
      return null;
    };

    setSearchQuery(getStoredValue(STORAGE_KEYS.SEARCH_QUERY, ""));

    // Проверяем параметр category в URL
    const categoryParam = searchParams ? searchParams.get("category") : null;
    const hashCategoryParam = getHashParam("category");

    console.log("Параметр category из URL:", categoryParam);
    console.log("Параметр category из хеша:", hashCategoryParam);

    // Если есть параметр категории в URL, используем его
    if (categoryParam) {
      const categoryId = parseInt(categoryParam, 10);
      console.log("Установка категории из URL параметра:", categoryId);
      setActiveCategory(categoryId);
      localStorage.setItem(
        STORAGE_KEYS.ACTIVE_CATEGORY,
        JSON.stringify(categoryId)
      );
    } else if (hashCategoryParam) {
      const categoryId = parseInt(hashCategoryParam, 10);
      console.log("Установка категории из хеш-параметра:", categoryId);
      setActiveCategory(categoryId);
      localStorage.setItem(
        STORAGE_KEYS.ACTIVE_CATEGORY,
        JSON.stringify(categoryId)
      );
    } else {
      // Если параметра нет, используем сохраненное значение
      setActiveCategory(getStoredValue(STORAGE_KEYS.ACTIVE_CATEGORY, null));
    }

    setActiveTag(getStoredValue(STORAGE_KEYS.ACTIVE_TAG, null));

    const storedCustomTags = getStoredValue(STORAGE_KEYS.ACTIVE_CUSTOM_TAG, []);

    // Проверяем параметр tag в стандартных search params
    const tagParam = searchParams ? searchParams.get("tag") : null;
    // Проверяем параметр tag в хеше URL
    const hashTagParam = getHashParam("tag");

    console.log("Параметр tag из URL:", tagParam);
    console.log("Параметр tag из хеша:", hashTagParam);

    // Обработка URL-параметра tag=sale для фильтрации товаров со скидкой
    if (tagParam === "sale" || hashTagParam === "sale") {
      console.log(
        "Обнаружен параметр tag=sale, устанавливаем кастомный тег sale"
      );
      setActiveCustomTag(["sale"]);
      setShowCustomTags(true);
      localStorage.setItem(
        STORAGE_KEYS.ACTIVE_CUSTOM_TAG,
        JSON.stringify(["sale"])
      );
      localStorage.setItem(
        STORAGE_KEYS.SHOW_CUSTOM_TAG_FILTER,
        JSON.stringify(true)
      );
    } else {
      setActiveCustomTag(
        Array.isArray(storedCustomTags) ? storedCustomTags : []
      );
      setShowCustomTags(
        getStoredValue(STORAGE_KEYS.SHOW_CUSTOM_TAG_FILTER, false)
      );
    }

    setShowTagFilter(getStoredValue(STORAGE_KEYS.SHOW_TAG_FILTER, false));
    setShowSearch(getStoredValue(STORAGE_KEYS.SHOW_SEARCH, false));
    setIsClient(true);

    console.log("Активные фильтры после инициализации:");
    console.log(
      "- activeCategory:",
      getStoredValue(STORAGE_KEYS.ACTIVE_CATEGORY, null)
    );
    console.log("- activeTag:", getStoredValue(STORAGE_KEYS.ACTIVE_TAG, null));
    console.log(
      "- activeCustomTag:",
      tagParam === "sale" || hashTagParam === "sale"
        ? ["sale"]
        : storedCustomTags
    );
    console.log(
      "- showCustomTags:",
      tagParam === "sale" || hashTagParam === "sale"
        ? true
        : getStoredValue(STORAGE_KEYS.SHOW_CUSTOM_TAG_FILTER, false)
    );
  }, [searchParams]);

  const handleSearchChange = (query: string) => {
    setSearchQuery(query);
    localStorage.setItem(STORAGE_KEYS.SEARCH_QUERY, JSON.stringify(query));
  };

  const handleCategoryChange = (categoryId: number) => {
    const newCategoryValue = categoryId === activeCategory ? null : categoryId;

    localStorage.setItem(STORAGE_KEYS.ACTIVE_CUSTOM_TAG, JSON.stringify([]));
    setActiveCustomTag([]);

    setActiveCategory(newCategoryValue);
    localStorage.setItem(
      STORAGE_KEYS.ACTIVE_CATEGORY,
      JSON.stringify(newCategoryValue)
    );
  };

  const handleTagChange = (tag: string) => {
    const newTagValue = tag === activeTag ? null : tag;
    setActiveTag(newTagValue);
    localStorage.setItem(STORAGE_KEYS.ACTIVE_TAG, JSON.stringify(newTagValue));
  };

  const handleCustomTagChange = (tag: string) => {
    const isSaleTag = tag.toLowerCase() === "sale";

    setActiveCustomTag((prevActiveTags) => {
      // Проверяем, включен ли уже тег в список активных
      const isTagAlreadyActive = prevActiveTags.includes(tag);

      let newActiveTags;

      if (isTagAlreadyActive) {
        // Если тег уже активен, удаляем его из списка
        newActiveTags = prevActiveTags.filter((t) => t !== tag);

        if (isSaleTag) {
          console.log("Деактивация тега Sale, перезагрузка доступных тегов");
        }
      } else {
        newActiveTags = [...prevActiveTags, tag];
      }

      // Сохраняем обновленный список активных тегов в localStorage
      localStorage.setItem(
        STORAGE_KEYS.ACTIVE_CUSTOM_TAG,
        JSON.stringify(newActiveTags)
      );

      if (newActiveTags.length > 0 && !showCustomTags) {
        setShowCustomTags(true);
        localStorage.setItem(
          STORAGE_KEYS.SHOW_CUSTOM_TAG_FILTER,
          JSON.stringify(true)
        );
      }

      return newActiveTags;
    });
  };

  const toggleCategoryFilter = () => {
    const newValue = !showCustomTags;
    setShowCustomTags(newValue);
    localStorage.setItem(
      STORAGE_KEYS.SHOW_CUSTOM_TAG_FILTER,
      JSON.stringify(newValue)
    );
  };

  const toggleTagFilter = () => {
    const newValue = !showTagFilter;
    setShowTagFilter(newValue);
    localStorage.setItem(
      STORAGE_KEYS.SHOW_TAG_FILTER,
      JSON.stringify(newValue)
    );
  };

  const searchInputRef = useRef<HTMLInputElement>(null);

  const toggleSearch = () => {
    setShowSearch(!showSearch);
    localStorage.setItem(STORAGE_KEYS.SHOW_SEARCH, JSON.stringify(!showSearch));
  };

  useEffect(() => {
    if (showSearch && searchInputRef.current) {
      setTimeout(() => {
        searchInputRef.current?.focus();
      }, 300);
    }
  }, [showSearch]);

  return (
    <main
      className={`mt-[20px] px-[10px] w-full catalogMain 
        ${detectIOS() ? "catalogMain--ios" : ""}
        `}
    >
      <div className="mb-[13px]">
        <div className="catalog-top">
          <h1 className="catalog-top-title">{ru.widgets.catalog.title}</h1>

          <div className="catalog-top-right">
            <button
              suppressHydrationWarning
              className={`catalog-top-right-button ${isClient && showSearch ? "active" : ""}`}
              onClick={toggleSearch}
            >
              <img src={`${iconsBaseLink}search-icon.svg`} alt="" />
            </button>

            <button
              suppressHydrationWarning
              className={`catalog-top-right-button ${isClient && showTagFilter ? "active" : ""}`}
              onClick={toggleTagFilter}
            >
              <img src={`${iconsBaseLink}sort-icon.svg`} alt="" />
            </button>

            <button
              suppressHydrationWarning
              className={`catalog-top-right-button ${isClient && showCustomTags ? "active" : ""}`}
              onClick={toggleCategoryFilter}
            >
              <img src={`${iconsBaseLink}filter-icon.svg`} alt="" />
            </button>
          </div>
        </div>

        <div
          suppressHydrationWarning
          className={`search-panel ${isClient && showSearch ? "search-panel--visible" : ""}`}
        >
          <Search
            onSearch={handleSearchChange}
            inputRef={searchInputRef}
            initialValue={searchQuery}
          />
        </div>

        {isClient && (
          <Suspense>
            <Filters
              activeTag={activeTag}
              activeCategory={activeCategory}
              activeCustomTag={activeCustomTag}
              setActiveTag={setActiveTag}
              setActiveCategory={setActiveCategory}
              showTagFilter={showTagFilter}
              showCategoryFilter={true}
              showCustomTags={showCustomTags}
              handleTagChange={handleTagChange}
              handleCategoryChange={handleCategoryChange}
              handleCustomTagChange={handleCustomTagChange}
              setActiveCustomTag={setActiveCustomTag}
            />
          </Suspense>
        )}
      </div>

      <ProductsSection
        isFavorites={false}
        categoryFilter={activeCategory}
        tagFilter={activeTag}
        customTagFilter={activeCustomTag}
        searchQuery={searchQuery}
      />
    </main>
  );
};

export default CatalogContent;

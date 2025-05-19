"use client";
import React, { useEffect, useRef } from "react";

import { tags } from "@/data/tags";

import Slider from "@/shared/Slider";

import "@/styles/shared/tagsFilter.css";

interface TagsFilterProps {
  activeTag: string | null;
  onTagChange: (tag: string) => void;
}

const TagsFilter: React.FC<TagsFilterProps> = ({ activeTag, onTagChange }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const tagRefs = useRef<(HTMLDivElement | null)[]>([]);

  // Новая функция для прокрутки к активному тегу
  const scrollToActiveTag = () => {
    if (!activeTag || !containerRef.current) return;

    // Находим индекс активного тега
    const activeTagIndex = tags.findIndex((tag) => tag.title === activeTag);

    // Если нашли тег и есть ссылка на DOM-элемент
    if (activeTagIndex !== -1 && tagRefs.current[activeTagIndex]) {
      const activeElement = tagRefs.current[activeTagIndex];

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

  // Вызываем скролл при изменении активного тега
  useEffect(() => {
    if (activeTag && tags.length > 0) {
      // Задержка для уверенности, что DOM готов
      setTimeout(scrollToActiveTag, 300);
    }
  }, [activeTag]);

  // Обработчик клика по тегу
  const handleTagClick = (tag: string) => {
    onTagChange(tag);

    // Если выбирается новый тег (не снимается выбор), скроллим к нему
    if (tag !== activeTag) {
      setTimeout(scrollToActiveTag, 50);
    }
  };

  return (
    <div className="tagsFilter" ref={containerRef}>
      <Slider height={"38px"}>
        {tags.map((tag, index) => (
          <div
            key={tag.id}
            ref={(el) => {
              tagRefs.current[index] = el;
            }}
            className={`tagsFilter-tag ${
              activeTag === tag.title ? "tagsFilter-tag--active" : ""
            } ${tag.title === "Сначала дешевле" ? "price-sort-tag" : ""}`}
            onClick={() => handleTagClick(tag.title)}
          >
            <p className="tagsFilter-tag-title">{tag.title}</p>

            {activeTag === tag.title &&
              activeTag.trim() === tag.title.trim() && (
                <button
                  className="tagsFilter-tag-closeButton"
                  style={{
                    display: activeTag === tag.title ? "block" : "none",
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

export default TagsFilter;

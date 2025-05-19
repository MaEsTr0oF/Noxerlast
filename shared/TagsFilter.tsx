"use client";
import React, { useEffect, useRef, useState } from "react";

import { tags } from "@/data/tags";

import "@/styles/shared/tagsFilter.css";

interface TagsFilterProps {
  activeTag: string | null;
  onTagChange: (tag: string) => void;
}

const TagsFilter: React.FC<TagsFilterProps> = ({ activeTag, onTagChange }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const tagRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  // Функция для прокрутки к активному тегу
  const scrollToActiveTag = () => {
    if (!isClient || !containerRef.current || !activeTag) return;

    const activeTagIndex = tags.findIndex((tag) => tag.title === activeTag);

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

  // Эффект для прокрутки к активному тегу после загрузки
  useEffect(() => {
    if (isClient && activeTag) {
      setTimeout(() => {
        scrollToActiveTag();
      }, 300);
    }
  }, [isClient, activeTag]);

  return (
    <div className="tagsFilter">
      <div ref={containerRef} className="slider-container">
        {tags.map((tag, index) => (
          <div
            key={tag.id}
            ref={(el) => {
              tagRefs.current[index] = el;
            }}
            className={`tagsFilter-tag slider-item ${activeTag === tag.title ? "tagsFilter-tag--active" : ""} ${tag.title === "Сначала дешевле" ? "price-sort-tag" : ""}`}
            onClick={() => onTagChange(tag.title)}
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
      </div>
    </div>
  );
};

export default TagsFilter;

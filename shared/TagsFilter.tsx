import React from "react";

import { tags } from "@/data/tags";

import Slider from "@/shared/Slider";

import "@/styles/shared/tagsFilter.css";

interface TagsFilterProps {
  activeTag: string | null;
  onTagChange: (tag: string) => void;
}

const TagsFilter: React.FC<TagsFilterProps> = ({ activeTag, onTagChange }) => {
  return (
    <div className="tagsFilter">
      <Slider height={"38px"}>
        {tags.map((tag) => (
          <div
            key={tag.id}
            className={`tagsFilter-tag ${activeTag === tag.title ? "tagsFilter-tag--active" : ""} ${tag.title === "Сначала дешевле" ? "price-sort-tag" : ""}`}
            onClick={() => onTagChange(tag.title)}
          >
            <p className="tagsFilter-tag-title">{tag.title}</p>

            {activeTag === tag.title && activeTag.trim() === tag.title.trim() && (
              <button
              
               className="tagsFilter-tag-closeButton"
               style={{ 
                display: activeTag === tag.title ? 'block' : 'none' 
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

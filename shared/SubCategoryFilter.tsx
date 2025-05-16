import React from "react";

import Slider from "@/shared/Slider";

import "@/styles/shared/subCategoryFilter.css";

interface CategoryFilterProps {
  activeCategory: number | null;
  onCategoryChange: (categoryId: number) => void;
}

const SubCategoryFilter: React.FC<CategoryFilterProps> = ({
  activeCategory,
  onCategoryChange,
}) => {
  return (
    <Slider height={"29px"}>
      <div className="categoryFilter-tag-subtagContainer">
        <button className="categoryFilter-tag-subtagContainer-item">
          <p className="categoryFilter-tag-subtagContainer-item-text">
            мужское
          </p>

          {/*{activeCategory === category.id && ()}*/}
        </button>

        <button className="categoryFilter-tag-subtagContainer-item">
          <p className="categoryFilter-tag-subtagContainer-item-text">
            женское
          </p>
        </button>
      </div>
    </Slider>
  );
};

export default SubCategoryFilter;

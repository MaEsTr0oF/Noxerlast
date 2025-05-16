"use client";
import React, { useState, useEffect, useRef } from "react";
import { observer } from "mobx-react-lite";
import ru from "@/messages/ru.json";
import Product from "@/entities/Product";
import "@/styles/shared/search.css";
import { iconsBaseLink } from "@/utils/globalVariables";
import { dataStore } from "@/store/DataStore";
import type { ProductType } from "@/types/ProductType";

interface SearchProps {
  onSearch: (query: string) => void;
  inputRef?: React.RefObject<HTMLInputElement | null>;
  initialValue?: string;
}

const Search: React.FC<SearchProps> = observer(
  ({ onSearch, inputRef, initialValue = "" }) => {
    const [isClient, setIsClient] = useState(false);
    const [searchValue, setSearchValue] = useState("");

    useEffect(() => {
      setIsClient(true);
      if (initialValue) {
        setSearchValue(initialValue);
        onSearch(initialValue);
      }
    }, [initialValue]);

    const triggerSearch = (value: string) => {
      onSearch(value);
    };

    useEffect(() => {
      if (isClient) {
        triggerSearch(searchValue);
      }
    }, [searchValue, isClient]);

    const handleClearSearch = () => {
      setSearchValue("");
      onSearch("");
    };

    return (
      <div className="search-container">
        <div className="search">
          <img src={`${iconsBaseLink}search-component-icon.svg`} alt="" />

          <input
            type="text"
            placeholder={ru.shared.search.placeholder}
            className="search-input"
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
            ref={inputRef}
          />

          {searchValue && (
            <button className="clear-search-btn" onClick={handleClearSearch}>
              ✕
            </button>
          )}
        </div>
      </div>
    );
  }
);

export default Search;

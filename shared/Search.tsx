"use client";
import React, { useState, useEffect, useRef, useCallback } from "react";
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
    const [debouncedValue, setDebouncedValue] = useState("");
    const debounceTimerRef = useRef<NodeJS.Timeout | null>(null);

    // Эффект для инициализации клиентской части и начального значения
    useEffect(() => {
      setIsClient(true);
      if (initialValue) {
        setSearchValue(initialValue);
        setDebouncedValue(initialValue);
      }
    }, [initialValue]);

    // Отдельный эффект для дебаунса ввода
    useEffect(() => {
      if (!isClient) return;

      // Очищаем предыдущий таймер
      if (debounceTimerRef.current) {
        clearTimeout(debounceTimerRef.current);
      }

      // Устанавливаем новый таймер для дебаунса
      debounceTimerRef.current = setTimeout(() => {
        setDebouncedValue(searchValue);
      }, 300); // 300ms дебаунс

      // Очистка при размонтировании
      return () => {
        if (debounceTimerRef.current) {
          clearTimeout(debounceTimerRef.current);
        }
      };
    }, [searchValue, isClient]);

    // Запускаем поиск только когда дебаунсированное значение изменилось
    useEffect(() => {
      if (isClient && debouncedValue !== undefined) {
        onSearch(debouncedValue);
      }
    }, [debouncedValue, onSearch, isClient]);

    const handleClearSearch = () => {
      setSearchValue("");
      setDebouncedValue("");
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

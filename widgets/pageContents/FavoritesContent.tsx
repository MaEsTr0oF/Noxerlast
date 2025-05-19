"use client";
import React, { useEffect, useState } from "react";
import { observer } from "mobx-react-lite";

import ru from "@/messages/ru.json";
import { favoritesStore } from "@/store/FavoritesStore";

import ProductsSection from "@/widgets/sections/ProductsSection";

import "@/styles/widgets/favorites.css";
import Loading from "@/shared/Loading";
import { detectIOS } from "@/utils/detectIOS";

const FavoritesContent = observer(() => {
  const hasFavorites = favoritesStore.favoritesIds.length > 0;
  const [isLoading, setIsLoading] = useState<boolean>(false);
  useEffect(() => {
    setIsLoading(!!favoritesStore);
  }, [hasFavorites]);

  return (
    <main
      className={`favoritesMain 
    ${detectIOS() ? "favoritesMain--ios" : ""}
    `}
    >
      {isLoading ? (
        hasFavorites ? (
          <ProductsSection isFavorites={true} />
        ) : (
          <div className="favoritesMain-empty">
            <h2 className="favoritesMain-empty-title">
              У вас пока нет избранных товаров
            </h2>
            <p className="favoritesMain-empty-text">
              Нажмите на{" "}
              <svg
                width="18"
                height="16"
                viewBox="0 0 18 16"
                fill={"transparent"}
                xmlns="http://www.w3.org/2000/svg"
                style={{
                  display: "inline-block",
                }}
              >
                <path
                  d="M9.30663 14.7267L9.30662 14.7267L9.30029 14.7289C9.24983 14.7467 9.14099 14.7668 8.99996 14.7668C8.85893 14.7668 8.75009 14.7467 8.69963 14.7289L8.69964 14.7289L8.69329 14.7267C7.57825 14.346 5.71238 13.3333 4.13388 11.716C2.56322 10.1067 1.31663 7.94228 1.31663 5.24183C1.31663 3.02277 3.10364 1.2335 5.29996 1.2335C6.60123 1.2335 7.75317 1.86153 8.47812 2.8377C8.60075 3.00282 8.79429 3.10016 8.99996 3.10016C9.20563 3.10016 9.39917 3.00282 9.5218 2.8377C10.2464 1.86206 11.4064 1.2335 12.7 1.2335C14.8963 1.2335 16.6833 3.02277 16.6833 5.24183C16.6833 7.94228 15.4367 10.1067 13.866 11.716C12.2875 13.3333 10.4217 14.346 9.30663 14.7267Z"
                  stroke={"#6C6C6C"}
                  strokeWidth="1.3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              , чтобы сохранить любой понравившийся товар
            </p>
          </div>
        )
      ) : (
        <Loading />
      )}
    </main>
  );
});

export default FavoritesContent;

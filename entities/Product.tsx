"use client";
import React, { useEffect, useState } from "react";

import { observer } from "mobx-react-lite";

import ru from "@/messages/ru.json";

import { favoritesStore } from "@/store/FavoritesStore";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import type { SwiperClass } from "swiper/react";

import Link from "next/link";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "@/styles/entities/product.css";
import { NavLink } from "react-router-dom";
import { getTagBackground } from "@/utils/getTagBackground";
import { getTagLabel } from "@/utils/getTagLabel";

interface ProductProps {
  id: number;
  tags: string[];
  images: string[] | any[];
  initialPrice: string;
  currentPrice: string;
  title: string;
  categoryId: number;
}

const Product: React.FC<ProductProps> = observer(
  ({ id, tags, images, initialPrice, currentPrice, title, categoryId }) => {

    const stopPropagation = (e: React.MouseEvent) => {
      e.preventDefault();
      e.stopPropagation();
    };

    // Проверяем валидность данных
    const hasValidId = id && typeof id === "number";
    const hasValidImages = Array.isArray(images) && images.length > 0;
    const hasValidPrice = currentPrice && typeof currentPrice === "string";
    const hasValidTitle = title && typeof title === "string";

    if (!hasValidId) {
      console.error("Продукт без валидного ID:", id);
      return null;
    }

    return (
      <NavLink to={`/product/${id}`} className="product-card click-effect-block">
        <div className="product-card-sliderWrapper">
          <div className="product-card-sliderWrapper-tags">
            {tags &&
              tags.length > 0 &&
              tags.map(
                (tag: string) =>
                  tag.trim() !== "" && (
                    <div key={tag} className={`product-card-sliderWrapper-tag ${getTagBackground(tag)}`}>
                      {getTagLabel(tag)}
                    </div>
                  )
              )}
          </div>

          {hasValidImages ? (
            <Swiper modules={[Pagination]} spaceBetween={10} slidesPerView={1} pagination={{ clickable: true }} className="product-card-swiper" style={{ width: "100%", height: "100%" }}>
              {images.map((image: any) => (
                <SwiperSlide key={image.Image_ID || Math.random()}>
                  <div className="product-slide-container">
                    <img
                      className="product-card-slide-image"
                      src={image.Image_URL ? image.Image_URL : "/placeholder-image.jpg"}
                      alt={`Изображение товара ${title || "Товар"}`}
                      onError={(e) => {
                        e.currentTarget.src = "/placeholder-image.jpg"
                      }}
                    />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          ) : (
            <div className="product-card-no-image">
              <p>Нет изображения</p>
            </div>
          )}

          <button
            onClick={(e) => {
              e.preventDefault()
              e.stopPropagation()
              favoritesStore.toggleFavorite(id)
            }}
            className="product-card-addToFavoritesButton"
          >
            <svg width="18" height="16" viewBox="0 0 18 16" fill={favoritesStore.favoritesIds.some((item) => item === id) ? "#FE646F" : "transparent"} xmlns="http://www.w3.org/2000/svg" className="cursor-pointer">
              <path
                d="M9.30663 14.7267L9.30662 14.7267L9.30029 14.7289C9.24983 14.7467 9.14099 14.7668 8.99996 14.7668C8.85893 14.7668 8.75009 14.7467 8.69963 14.7289L8.69964 14.7289L8.69329 14.7267C7.57825 14.346 5.71238 13.3333 4.13388 11.716C2.56322 10.1067 1.31663 7.94228 1.31663 5.24183C1.31663 3.02277 3.10364 1.2335 5.29996 1.2335C6.60123 1.2335 7.75317 1.86153 8.47812 2.8377C8.60075 3.00282 8.79429 3.10016 8.99996 3.10016C9.20563 3.10016 9.39917 3.00282 9.5218 2.8377C10.2464 1.86206 11.4064 1.2335 12.7 1.2335C14.8963 1.2335 16.6833 3.02277 16.6833 5.24183C16.6833 7.94228 15.4367 10.1067 13.866 11.716C12.2875 13.3333 10.4217 14.346 9.30663 14.7267Z"
                stroke={favoritesStore.favoritesIds.some((item) => item === id) ? "#FE646F" : "#6C6C6C"}
                strokeWidth="1.3"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>

        <div className="product-card-priceContainer">
          <p className="product-card-priceContainer-current product-card-text">{hasValidPrice ? `${currentPrice} ₽` : "Цена по запросу"}</p>

          {initialPrice && initialPrice !== "0" && initialPrice !== currentPrice && <p className="product-card-priceContainer-initial product-card-text">{initialPrice} ₽</p>}
        </div>

        <h4 className="product-card-title product-card-text">{hasValidTitle ? title : "Товар без названия"}</h4>

        <div className="product-card-link-wrapper">
          <p className="product-card-link product-card-text" suppressHydrationWarning>
            {ru.entities.product.buttonText || "Перейти к товару"}
          </p>
        </div>
      </NavLink>
    )
  }
);

export default Product;

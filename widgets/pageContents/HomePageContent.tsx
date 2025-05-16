"use client";
import React, { useEffect, useState } from "react";

import { observer } from "mobx-react-lite";

import { iconsBaseLink } from "@/utils/globalVariables";

import { dataStore } from "@/store/DataStore";

import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import Link from "next/link";

import ProductsSection from "@/widgets/sections/ProductsSection";

import Slider from "@/shared/Slider";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Loading from "@/shared/Loading";
import { NavLink } from "react-router-dom";
import { detectIOS } from "@/utils/detectIOS";
import { useCategories } from "@/data/categories";

const HomePageContent = observer(() => {
  const [isClient, setIsClient] = useState(false);
  const [reviewsHref, setReviewsHref] = useState("/");

  useEffect(() => {
    setIsClient(true);
    // Set the correct href once data is available on the client
    const linkValue =
      dataStore.data?.special_project_parameters?.reviews_link_value;
    if (linkValue) {
      setReviewsHref(linkValue);
    }
  }, [dataStore.data]);

  const renderBanner = () => {
    if (!isClient) {
      return (
        <div
          className="banner-placeholder"
          style={{ width: "100%", height: "150px" }}
        >
          <Loading />
        </div>
      );
    }

    const swiperSettings = {
      modules: [Pagination],
      spaceBetween: 10,
      slidesPerView: 1,
      pagination: { clickable: true },
      className: "product-card-swiper",
      style: { width: "100%", height: "100%" },
      simulateTouch: true,
      touchRatio: 1,
      resistanceRatio: 0,
      preventInteractionOnTransition: false,
    };

    return (
      <Swiper {...swiperSettings}>
        {dataStore.data.special_project_parameters_actions?.map(
          (banner: any) => (
            <SwiperSlide key={banner.id}>
              <div className="swiper-slide-content">
                <img
                  src={banner.image_url ? banner.image_url : undefined}
                  alt=""
                  className="bannerImage"
                />
              </div>
            </SwiperSlide>
          )
        )}
      </Swiper>
    );
  };

  return (
    <main
      data-page="index"
      className={`homeMain ${detectIOS() ? "homeMain--ios" : ""}`}
    >
      <div className="banner">{renderBanner()}</div>

      <div className="infoCards">
        <Link
          href={reviewsHref} // Use state for href
          className="reviewsCard click-effect-block"
        >
          <p className="reviewsTitle">Отзывы</p>

          <div className="ratingContainer">
            <img src={`${iconsBaseLink}rating-icon.png`} alt="" />
          </div>

          <p className="ratingText">4,9 • 37 000 оценок</p>
        </Link>

        <NavLink
          to="/catalog?tag=sale"
          className="salesCard click-effect-block"
        >
          <img src={`${iconsBaseLink}sales-icon.svg`} alt="" />

          <p className="salesText">
            Акции <br />и скидки
          </p>
        </NavLink>
      </div>

      <div className="categoriesContainer">
        <Slider height={"100%"}>
          {useCategories().map(
            (category: {
              Category_ID: number;
              Category_Image: string;
              Category_Name: string;
            }) => (
              <NavLink
                key={category.Category_ID}
                to={`/catalog?category=${category.Category_ID}`}
                className="categoryItem"
              >
                <img
                  src={
                    category.Category_Image
                      ? category.Category_Image
                      : undefined
                  }
                  alt=""
                />

                <p className="categoryTitle">
                  {category.Category_ID === 2
                    ? "Аксессуары и техника"
                    : category.Category_Name}
                </p>
              </NavLink>
            )
          )}
        </Slider>
      </div>
      <ProductsSection
        isFavorites={false}
        importanceFilter={true}
        limit={10}
        showOnMainOnly={true}
      />
    </main>
  );
});

export default HomePageContent;

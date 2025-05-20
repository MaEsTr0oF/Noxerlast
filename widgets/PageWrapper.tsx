"use client";
import React, { useEffect } from "react";
import "@/styles/widgets/pageWrapper.css";

import TheHeader from "@/widgets/header/TheHeader";
import TheFooter from "@/widgets/footer/TheFooter";
import { useLocation } from "react-router-dom";
import { detectIOS } from "@/utils/detectIOS";
import { dataStore } from "@/store/DataStore";

const PageWrapper: React.FC<{ children: any }> = ({ children }) => {
  const location = useLocation();
  const isProductPage = location.pathname.includes("/product/");


  return (
    <>
      <TheHeader />

      {children}

      <div
        className={`wrapper-footer 
          ${isProductPage ? "wrapper-footer-productPage" : ""}
          ${detectIOS() ? "wrapper-footer--ios" : ""}
          `}
      >
        <p className="footer-text">
        {dataStore.data?.special_project_parameters?.project_name_extra_field_1} <br />
          <a
            href={dataStore.data?.special_project_parameters?.footer_link_value}
            target="_blank"
            className="index-telegram-open-special_tg footer-link"
          >
            {dataStore.data?.special_project_parameters?.footer_link_description}
          </a>
        </p>
      </div>

      <TheFooter />
    </>
  );
};

export default PageWrapper;

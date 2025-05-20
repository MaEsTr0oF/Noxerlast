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

  const getProjectName = () => {
    return (
      dataStore.data?.special_project_parameters?.project_name_value ||
      "noxerai_bot"
    );
  };

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
          Разработано на платформе Noxer <br />
          <a
            href="https://t.me/noxerai_bot`"
            className="index-telegram-open-special_tg footer-link"
          >
            @{getProjectName()}
          </a>
        </p>
      </div>

      <TheFooter />
    </>
  );
};

export default PageWrapper;

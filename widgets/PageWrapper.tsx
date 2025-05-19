"use client";
import React, { useEffect } from "react";
import "@/styles/widgets/pageWrapper.css";

import TheHeader from "@/widgets/header/TheHeader";
import TheFooter from "@/widgets/footer/TheFooter";
import { useLocation } from "react-router-dom";
import { detectIOS } from "@/utils/detectPlatform";
import { dataStore } from "@/store/DataStore";

const PageWrapper: React.FC<{ children: any }> = ({ children }) => {
  const location = useLocation();
  const isProductPage = location.pathname.includes("/product/");

  function clickBotHandler() {
    let username =
      dataStore.data?.special_project_parameters?.telegram_bot_username_value ||
      "noxerai_bot";

    // Если имя пользователя начинается с @, удаляем этот символ для URL
    if (username.startsWith("@")) {
      username = username.substring(1);
    }

    const link = `https://t.me/${username}`;
    if (link) {
      window.open(link, "_blank");
    }
  }

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
            href="#"
            onClick={clickBotHandler}
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

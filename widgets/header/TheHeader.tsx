"use client";
import React, { useEffect, useState, useRef } from "react";
import { usePathname } from "next/navigation";
import { iconsBaseLink } from "@/utils/globalVariables";
import ru from "@/messages/ru.json";
import { dataStore } from "@/store/DataStore";
import "@/styles/widgets/header.css";
import { useLocation } from "react-router-dom";
import { detectIOS } from "@/utils/detectIOS";

const TheHeader = () => {
  const pathname = usePathname();
  const location = useLocation();
  const [user, setUser] = useState<Record<string, any>>({});
  const [tgApp, setTgApp] = useState<any>(null);

  const profileImageRef = useRef<HTMLImageElement>(null);
  const profileNameRef = useRef<HTMLParagraphElement>(null);
  const settingButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const tgApp = window.Telegram.WebApp;
    console.log("Version 0.0.32452");
    console.log(location.pathname);

    if (typeof window !== "undefined") {
      if (tgApp) {
        setTgApp(tgApp);
        tgApp.expand();
        tgApp.ready();

        if (tgApp.version >= "7.9") {
          if (detectMobile()) {
            tgApp.requestFullscreen();
          }
          tgApp.disableVerticalSwipes();
          tgApp.setHeaderColor("#f1f1f1");
          tgApp.setBottomBarColor("#f1f1f1");
          tgApp.setBackgroundColor("#f1f1f1");

          if (location.pathname === "/") {
            tgApp.BackButton.hide();
          } else {
            tgApp.BackButton.show();
            tgApp.BackButton.onClick(() => {
              window.history.back();
            });
          }
        }

        // Получение данных пользователя
        if (tgApp.initDataUnsafe && tgApp.initDataUnsafe.user) {
          setUser(tgApp.initDataUnsafe.user);
        }

        // Обработка перезагрузки страницы при использовании кэша
        window.addEventListener("pageshow", (event) => {
          if (event.persisted) {
            window.location.reload();
          }
        });
      } else {
        console.warn("Telegram WebApp не доступен. Запуск вне Mini App.");
      }
    }

    return () => {
      window.removeEventListener("pageshow", () => {});
    };
  }, [location]);
  function openLinkHandler() {
    let channelName =
      dataStore.data?.special_project_parameters?.telegram_header_link_value ||
      "noxerai_bot";

    // Если имя канала начинается с @, удаляем этот символ для URL
    if (channelName.startsWith("@")) {
      channelName = channelName.substring(1);
    }

    const link = `https://t.me/${channelName}`;
    if (link) {
      window.open(link, "_blank");
    }
  }

  function detectMobile() {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
      navigator.userAgent
    );
  }

  const formatName = (name: string) => {
    if (!name) return "";
    return (
      name.charAt(0).toLocaleUpperCase() + name.slice(1).toLocaleLowerCase()
    );
  };

  const getProjectName = () => {
    return (
      dataStore.data?.special_project_parameters?.project_name_value ||
      "noxerai_bot"
    );
  };

  return (
    <header
      className={`header 
    ${!detectMobile() ? "header-mobile" : ""}
    ${detectIOS() ? "header-ios" : ""}`}
    >
      <div className="header-profile">
        <img
          ref={profileImageRef}
          className="header-profile-image"
          src={user.photo_url}
          alt=""
          id="header-avatar-image"
        />
        <p
          ref={profileNameRef}
          className="header-profile-text"
          id="header-username-text"
        >
          {user.first_name ? formatName(user.first_name) : "Вы"}{" "}
          {user.last_name || ""}
        </p>
      </div>

      <button onClick={openLinkHandler} className="header-telegram">
        <img src={`${iconsBaseLink}telegram-icon.svg`} alt="" />
        <p className="header-telegram-text index-telegram-open-special_tg">
          {getProjectName()}
        </p>
      </button>
    </header>
  );
};

export default TheHeader;

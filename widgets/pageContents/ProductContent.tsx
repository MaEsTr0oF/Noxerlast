"use client";
import React, { useEffect, useRef, useState } from "react";

import { useRouter } from "next/navigation";

import { observer } from "mobx-react-lite";

import { iconsBaseLink } from "@/utils/globalVariables";

import { dataStore } from "@/store/DataStore";
import { shoppingCartStore } from "@/store/ShoppingCartStore";
import { favoritesStore } from "@/store/FavoritesStore";

import { Pagination, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import Slider from "@/shared/Slider";

import "@/styles/widgets/product.css";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Loading from "@/shared/Loading";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { detectIOS } from "@/utils/detectIOS";
import { getTagBackground } from "@/utils/getTagBackground";
import { getTagLabel } from "@/utils/getTagLabel";
import VideoReview from "@/entities/VideoReview";

const ProductContent = observer(() => {
  const params = useParams<{ productId: string }>();
  const router = useRouter();
  const navigate = useNavigate();
  const location = useLocation();

  // Получаем ID продукта из хэша URL
  const [productId, setProductId] = useState<string | null>(null);

  useEffect(() => {
    if (params.productId) {
      setProductId(params.productId);
    }
  }, [params]);

  const descriptionRef = useRef<HTMLParagraphElement>(null);
  const specsRef = useRef<HTMLParagraphElement>(null);

  const [targetProduct, setTargetProduct] = useState({} as any);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  const [currentSettingsItems, setCurrentSettingsItems] = useState([] as any);
  const [addedSettingItems, setAddedSettingItems] = useState([] as any);
  const [selectedParams, setSelectedParams] = useState(
    {} as { [key: string]: any }
  );
  const [selectedColor, setSelectedColor] = useState<any>(null);
  const [mainImageUrl, setMainImageUrl] = useState<string | null>(null);
  const [totalPrice, setTotalPrice] = useState(0);
  const [selectedParameterType, setSelectedParameterType] =
    useState<string>("Размер");

  const [isDescriptionOpen, setIsDescriptionOpen] = useState(false);
  const [isSpecsOpen, setIsSpecsOpen] = useState(false);

  const [isAddingToCart, setIsAddingToCart] = useState(false);

  const [isAddToCartEnabled, setIsAddToCartEnabled] = useState(false);

  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const infoCards = [
    {
      title: "Наши гарантии на товар",
      image: `${iconsBaseLink}warranty-icon.svg`,
    },
    {
      title: "О нашем магазине",
      image: `${iconsBaseLink}about-icon.svg`,
    },
    {
      title: "Как можно вернуть товар?",
      image: `${iconsBaseLink}refund-icon.svg`,
    },
    {
      title: "Доставка и оплата товара",
      image: `${iconsBaseLink}delivery-icon.svg`,
    },
  ];

  function toggleHandler(
    refCurrent: HTMLParagraphElement,
    isOpen: boolean,
    setIsOpen: (v: boolean) => void
  ) {
    if (isOpen) {
      setIsOpen(false);
      refCurrent.style.marginTop = `0px`;
      refCurrent.style.maxHeight = `0px`;
    } else {
      setIsOpen(true);
      refCurrent.style.marginTop = `15px`;
      refCurrent.style.maxHeight = `${refCurrent.scrollHeight}px`;
    }
  }

  function addSettingItem(settingItem: any, paramName: string) {
    if (!settingItem) return;

    // Если это параметр с именем "Цвет", но не из массива colors,
    // проверим, есть ли у него extra_field_image или extra_field_color
    if (paramName.toLowerCase() === "цвет" && !targetProduct.colors?.length) {
      const fullParam = targetProduct.parameters.find(
        (p: any) => p.Parameter_ID === settingItem.id
      );

      if (fullParam?.extra_field_image) {
        setMainImageUrl(fullParam.extra_field_image);
      }
    }

    // Новый объект параметров с очищенным полем parameters, но сохраненным color
    const updatedParams = { Color: selectedParams.Color } as {
      [key: string]: any;
    };

    // Добавляем новый выбранный параметр
    updatedParams[paramName] = settingItem;

    // Устанавливаем выбранный тип параметра
    setSelectedParameterType(paramName);

    // Обновляем состояние
    setSelectedParams(updatedParams);
    setCurrentSettingsItems([settingItem]);

    // Проверяем, есть ли в корзине товар с таким параметром
    updateAddingToCartState(
      targetProduct.Product_ID,
      settingItem?.id,
      selectedColor?.Color_ID
    );
  }

  function selectColor(color: any) {
    if (!color) return;
    if (selectedColor === color) {
      setSelectedColor(null);
      // При отмене выбора цвета сбрасываем mainImageUrl, чтобы показать слайдер
      setMainImageUrl(null);
      return;
    }
    // Сохраняем текущий выбранный цвет
    setSelectedColor(color);

    // Если у цвета есть изображение, устанавливаем его как основное
    if (color.Color_image) {
      setMainImageUrl(color.Color_image);
    } else {
      // Иначе сбрасываем mainImageUrl для отображения слайдера
      setMainImageUrl(null);
    }

    // Сохраняем текущие выбранные параметры, а не сбрасываем их
    const updatedParams = { ...selectedParams };

    // Добавляем или обновляем цвет
    updatedParams.Color = {
      id: color.Color_ID,
      title: color.Color_Name,
      colorCode: color.Color_Code,
      colorImage: color.Color_image,
      discount: color.discount || 0,
    };

    // Обновляем состояние
    setSelectedParams(updatedParams);

    // Проверяем, есть ли в корзине товар с выбранным параметром и цветом
    const currentParam = currentSettingsItems[0];
    updateAddingToCartState(
      targetProduct.Product_ID,
      currentParam?.id,
      color.Color_ID
    );
  }

  function toggleDescriptionHandler() {
    if (descriptionRef.current)
      toggleHandler(
        descriptionRef.current,
        isDescriptionOpen,
        setIsDescriptionOpen
      );
  }

  function toggleSpecsHandler() {
    if (specsRef.current)
      toggleHandler(specsRef.current, isSpecsOpen, setIsSpecsOpen);
  }

  function handleAddToCart() {
    if (!targetProduct?.Product_ID) return;

    if (isAddingToCart) {
      // Для большей надежности можно установить хэш вручную
      window.location.hash = "#/shoppingcart";
      // Если выше не сработает, то используем navigate
      setTimeout(() => {
        navigate("/shoppingcart");
      }, 100);
      return;
    }

    // Проверяем наличие параметров и цветов в товаре
    const hasParameters = targetProduct.parameters?.length > 0;
    const hasColors = targetProduct.colors?.length > 0;

    // Получаем выбранный параметр из массива parameters
    let selectedParam = null;
    for (const key in selectedParams) {
      if (key !== "Color" && selectedParams[key]) {
        selectedParam = selectedParams[key];
        break;
      }
    }

    // Получаем выбранный цвет
    const selectedColorParam = selectedParams.Color;

    // Если есть массив colors и не выбран цвет, показываем предупреждение
    if (hasColors && !selectedColorParam) {
      setErrorMessage("Пожалуйста, выберите цвет товара");
      setTimeout(() => {
        setErrorMessage(null);
      }, 3000); // Скрыть сообщение через 3 секунды
      return;
    }

    // Проверяем, что выбраны необходимые параметры (только если они есть)
    if (hasParameters && !selectedParam) {
      setErrorMessage("Пожалуйста, выберите параметр товара");
      setTimeout(() => {
        setErrorMessage(null);
      }, 3000); // Скрыть сообщение через 3 секунды
      return;
    }

    // Создаем данные для добавления в корзину
    const cartData = {
      paramId: selectedParam?.id,
      paramTitle: selectedParam?.title,
      colorId: selectedColorParam?.id,
      colorName: selectedColorParam?.title,
      colorCode: selectedColorParam?.colorCode,
      colorImage: selectedColorParam?.colorImage,
      discount: selectedColorParam?.discount || 0,
    };

    // Добавляем товар в корзину
    shoppingCartStore.addToCart(targetProduct.Product_ID, cartData);

    // Сохраняем информацию о выбранном параметре для отслеживания состояния кнопки
    const selectedParamData = {
      id: selectedParam?.id || null,
      productId: targetProduct.Product_ID,
      title: selectedParam?.title || null,
      colorId: selectedColorParam?.id,
      colorName: selectedColorParam?.title,
      colorImage: selectedColorParam?.colorImage,
    };

    setAddedSettingItems([...addedSettingItems, selectedParamData]);
    localStorage.setItem(
      "addedSettingItems",
      JSON.stringify([...addedSettingItems, selectedParamData])
    );
    setIsAddingToCart(true);
  }

  function handleViewAllReviews() {
    const reviewsLink =
      dataStore.data?.special_project_parameters?.reviews_link_value;
    if (reviewsLink) {
      window.open(reviewsLink, "_blank");
    }
  }

  function openLinkTeletype(link: string) {
    const tg = window.Telegram.WebApp;
    if (tg) {
      tg.openLink(link, { try_instant_view: true });
    } else {
      window.open(link, "_blank");
    }
  }

  useEffect(() => {
    if (Object.keys(selectedParams).length > 0) {
      // Базовая цена из выбранных параметров
      let newTotalPrice = Object.values(selectedParams).reduce(
        (sum: number, param: any) => {
          // Проверяем, что параметр существует
          if (!param) return sum;

          // Проверяем, что это не цвет из массива colors
          // В этом случае у него будет свойство colorCode
          if (param.colorCode) return sum;

          return sum + (param?.price || 0);
        },
        0
      );

      // Вычитаем абсолютную скидку цвета, если есть
      if (selectedParams.Color && selectedParams.Color.discount) {
        newTotalPrice = Math.max(
          0,
          newTotalPrice - selectedParams.Color.discount
        );
      }

      setTotalPrice(newTotalPrice);
    } else {
      // Если нет выбранных параметров, устанавливаем цену 0
      setTotalPrice(0);
    }
  }, [selectedParams]);

  useEffect(() => {
    if (Object.entries(targetProduct).length) {
      // Всегда начинаем с новых выбранных параметров
      let newSelectedParams = {} as { [key: string]: any };

      // НЕ устанавливаем изображение как основное автоматически
      // Пусть пользователь сначала увидит слайдер
      setMainImageUrl(null);

      // НЕ инициализируем цвет автоматически, пользователь должен выбрать его сам
      setSelectedColor(null);

      // Инициализируем параметры из массива parameters если они есть
      if (targetProduct.parameters?.length > 0) {
        // Ищем параметр с chosen=true или берем первый
        const chosenParam = targetProduct.parameters.find((p: any) => p.chosen);
        const paramToUse = chosenParam || targetProduct.parameters[0];

        if (paramToUse) {
          // Добавляем выбранный параметр в общий объект
          newSelectedParams[paramToUse.name] = {
            id: paramToUse.Parameter_ID,
            index: 0,
            title: paramToUse.parameter_string,
            price: paramToUse.price || 0,
            old_price: paramToUse.old_price || null,
          };

          // Устанавливаем тип параметра
          setSelectedParameterType(paramToUse.name);

          // Устанавливаем текущий выбранный параметр
          setCurrentSettingsItems([
            {
              id: paramToUse.Parameter_ID,
              index: 0,
              title: paramToUse.parameter_string,
              price: paramToUse.price || 0,
              old_price: paramToUse.old_price || null,
            },
          ]);
        }
      }

      // Устанавливаем все выбранные параметры сразу
      if (Object.keys(newSelectedParams).length > 0) {
        setSelectedParams(newSelectedParams);
      }
    }
  }, [targetProduct]);

  useEffect(() => {
    const savedItems = localStorage.getItem("addedSettingItems");
    if (savedItems) {
      try {
        setAddedSettingItems(JSON.parse(savedItems));
      } catch (error) {
        setAddedSettingItems([]);
      }
    }
  }, []);

  useEffect(() => {
    if (addedSettingItems.length > 0) {
      localStorage.setItem(
        "addedSettingItems",
        JSON.stringify(addedSettingItems)
      );
    }
  }, [addedSettingItems]);

  useEffect(() => {
    if (currentSettingsItems.length > 0 && targetProduct?.Product_ID) {
      // Получаем цвет, если он выбран
      const selectedColorId = selectedColor?.Color_ID;

      // Проверяем, есть ли текущий параметр с текущим цветом в корзине
      const isCurrentSettingInCart = addedSettingItems.some((item: any) => {
        // Проверка параметра
        const paramMatch =
          item?.id === currentSettingsItems[0]?.id &&
          item?.productId === targetProduct.Product_ID;

        // Проверка цвета
        const colorMatch =
          !selectedColorId || item?.colorId === selectedColorId;

        return paramMatch && (selectedColorId ? colorMatch : true);
      });

      setIsAddingToCart(isCurrentSettingInCart);
    }
  }, [
    currentSettingsItems,
    targetProduct?.Product_ID,
    addedSettingItems,
    selectedColor,
  ]);

  // Проверяем, можно ли добавить товар в корзину (выбраны все обязательные параметры)
  useEffect(() => {
    // Проверяем наличие параметров и цветов в товаре
    const hasParameters = targetProduct?.parameters?.length > 0;
    const hasColors = targetProduct?.colors?.length > 0;

    // Проверяем, что выбраны все необходимые параметры
    let canAddToCart = true;

    if (hasParameters) {
      // Ищем параметр, который не является цветом
      const hasSelectedParam = Object.keys(selectedParams).some(
        (key) => key !== "Color"
      );

      if (!hasSelectedParam) {
        canAddToCart = false;
      }
    }

    if (hasColors) {
      if (!selectedParams.Color) {
        canAddToCart = false;
      }
    }

    setIsAddToCartEnabled(canAddToCart);
  }, [targetProduct, selectedParams]);

  useEffect(() => {
    setIsLoading(true);
    try {
      const product = dataStore.data?.products?.find(
        (product: any) => product?.Product_ID === Number(productId)
      );

      if (!product) {
        setIsError(true);
      } else {
        setIsError(false);
        setTargetProduct(product);
        setIsLoading(false);
      }
    } catch (error) {
      setIsError(true);
    }
  }, [productId, dataStore.data]);

  // Вспомогательная функция для обновления состояния isAddingToCart
  function updateAddingToCartState(
    productId: number,
    paramId?: number,
    colorId?: number
  ) {
    const isCurrentItemInCart = addedSettingItems.some((item: any) => {
      const productMatch = item?.productId === productId;
      const paramMatch = !paramId || item?.id === paramId;
      const colorMatch = !colorId || item?.colorId === colorId;

      return productMatch && paramMatch && colorMatch;
    });

    setIsAddingToCart(isCurrentItemInCart);
  }

  function scrollToVideo() {
    const e = document.getElementById("Video-review");
    if (e) e.scrollIntoView({ behavior: "smooth" });
  }

  if (isLoading) {
    return (
      <main
        className={`main-container ${detectIOS() ? "main-container--ios" : ""}`}
      >
        <div className="flex items-center justify-center w-full h-full min-h-[60vh]">
          <Loading />
        </div>
      </main>
    );
  }

  if (isError || !targetProduct?.Product_ID) {
    return (
      <main
        className={`main-container ${detectIOS() ? "main-container--ios" : ""}`}
      >
        <div className="flex items-center justify-center w-full h-full min-h-[60vh]">
          <p className="text-xl">
            Произошла ошибка при загрузке товара или товар не найден.
          </p>
        </div>
      </main>
    );
  }

  return (
    <main
      className={`main-container ${detectIOS() ? "main-container--ios" : ""}`}
    >
      <style jsx global>{`
        .swiper-pagination-bullet {
          width: 8px !important;
          height: 8px !important;
          opacity: 0.7 !important;
          background: #999 !important;
          margin: 0 4px;
        }
        .swiper-pagination-bullet-active {
          opacity: 1 !important;
          background: #333 !important;
        }
        .swiper-slide {
          display: flex !important;
          justify-content: center !important;
          align-items: center !important;
          width: 100% !important;
          opacity: 1 !important;
        }
        .swiper-slide-content {
          width: 100%;
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .product-image-item {
          max-width: 100%;
          max-height: 100%;
          object-fit: contain;
        }
        .swiper-pagination {
          bottom: 10px !important;
          z-index: 10 !important;
        }
      `}</style>
      <div className="product-image-container">
        {targetProduct.marks?.length > 0 &&
        targetProduct.marks[0]?.Mark_Name ? (
          <div
            className={`product-tag ${getTagBackground(targetProduct.marks[0].Mark_Name)}`}
          >
            {getTagLabel(targetProduct.marks[0].Mark_Name)}
          </div>
        ) : null}

        <button
          onClick={() =>
            favoritesStore.toggleFavorite(targetProduct.Product_ID)
          }
          className="product-favorite"
        >
          <svg
            width="25"
            height="25"
            viewBox="0 0 18 16"
            fill={
              favoritesStore.favoritesIds.some(
                (item) => item === targetProduct.Product_ID
              )
                ? "#FE646F"
                : "transparent"
            }
            xmlns="http://www.w3.org/2000/svg"
            className="cursor-pointer"
          >
            <path
              d="M9.30663 14.7267L9.30662 14.7267L9.30029 14.7289C9.24983 14.7467 9.14099 14.7668 8.99996 14.7668C8.85893 14.7668 8.75009 14.7467 8.69963 14.7289L8.69964 14.7289L8.69329 14.7267C7.57825 14.346 5.71238 13.3333 4.13388 11.716C2.56322 10.1067 1.31663 7.94228 1.31663 5.24183C1.31663 3.02277 3.10364 1.2335 5.29996 1.2335C6.60123 1.2335 7.75317 1.86153 8.47812 2.8377C8.60075 3.00282 8.79429 3.10016 8.99996 3.10016C9.20563 3.10016 9.39917 3.00282 9.5218 2.8377C10.2464 1.86206 11.4064 1.2335 12.7 1.2335C14.8963 1.2335 16.6833 3.02277 16.6833 5.24183C16.6833 7.94228 15.4367 10.1067 13.866 11.716C12.2875 13.3333 10.4217 14.346 9.30663 14.7267Z"
              stroke={
                favoritesStore.favoritesIds.some(
                  (item) => item === targetProduct.Product_ID
                )
                  ? "#FE646F"
                  : "#6C6C6C"
              }
              strokeWidth="1.3"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>

        {/* Основное отображение изображений */}
        {mainImageUrl ? (
          <div className="product-image">
            <div className="swiper-slide-content">
              <img
                className="product-image-item"
                src={mainImageUrl}
                alt={`Изображение товара ${targetProduct.Product_Name || "Товар"}`}
                onError={(e) => {
                  e.currentTarget.src = "/placeholder-image.jpg";
                  // Если изображение цвета не загрузилось, сбрасываем mainImageUrl
                  setMainImageUrl(null);
                }}
              />
            </div>
          </div>
        ) : (
          <div className="product-image">
            {(() => {
              try {
                // Преобразуем Proxy объекты в обычные
                const rawProduct = JSON.parse(JSON.stringify(targetProduct));

                // Собираем все изображения
                let allImages = [...(rawProduct.images || [])];

                // Добавляем изображения из параметров
                if (rawProduct.parameters) {
                  rawProduct.parameters.forEach((param: any) => {
                    if (param.extra_field_image) {
                      allImages.push({
                        Image_ID: `param-${param.Parameter_ID}`,
                        Image_URL: param.extra_field_image,
                        MainImage: false,
                        Product_ID: rawProduct.Product_ID,
                        from_parameter: true,
                        parameter_name: param.parameter_string,
                      });
                    }
                  });
                }

                // Если нет изображений, показываем заглушку
                if (allImages.length === 0) {
                  return (
                    <div className="swiper-slide-content">
                      <img
                        className="product-image-item"
                        src="/placeholder-image.jpg"
                        alt="Изображение товара отсутствует"
                      />
                    </div>
                  );
                }

                // Если есть только одно изображение, показываем его без слайдера
                if (allImages.length === 1) {
                  return (
                    <div className="swiper-slide-content">
                      <img
                        className="product-image-item"
                        src={allImages[0].Image_URL}
                        alt={`Изображение товара ${rawProduct.Product_Name || "Товар"}`}
                        onError={(e) => {
                          e.currentTarget.src = "/placeholder-image.jpg";
                        }}
                      />
                    </div>
                  );
                }

                // Если несколько изображений, используем Swiper
                return (
                  <Swiper
                    modules={[Pagination]}
                    spaceBetween={10}
                    slidesPerView={1}
                    pagination={{
                      clickable: true,
                    }}
                    className="product-slider"
                    onInit={(swiper) => {
                      setTimeout(() => swiper.update(), 100);
                    }}
                  >
                    {allImages.map((image, index) => (
                      <SwiperSlide
                        key={`slide-${index}-${image.Image_ID || Math.random()}`}
                      >
                        <div className="swiper-slide-content">
                          <img
                            className="product-image-item"
                            src={image.Image_URL}
                            alt={`Изображение товара ${rawProduct.Product_Name || "Товар"} ${image.from_parameter ? `(${image.parameter_name})` : ""}`}
                            onError={(e) => {
                              e.currentTarget.src = "/placeholder-image.jpg";
                            }}
                          />
                        </div>
                      </SwiperSlide>
                    ))}
                  </Swiper>
                );
              } catch (error) {
                return (
                  <div className="swiper-slide-content">
                    <img
                      className="product-image-item"
                      src="/placeholder-image.jpg"
                      alt="Ошибка загрузки изображений"
                    />
                  </div>
                );
              }
            })()}
          </div>
        )}
      </div>

      <div className="product-details">
        <h1 className="product-title">
          {targetProduct.Product_Name || "Неизвестный товар"}
        </h1>

        <div className="price-container">
          <p className="current-price">{totalPrice || 0} ₽</p>

          {selectedColor?.discount > 0 && (
            <p className="old-price">{totalPrice + selectedColor.discount} ₽</p>
          )}
        </div>

        {/* Параметры товара в слайдере */}
        {targetProduct.parameters?.length > 1 && (
          <div className="parameters-section">
            <h3 className="parameters-title">{selectedParameterType}</h3>
            <div className="parameters-content">
              <Slider height={"38px"} between="5px">
                {targetProduct.parameters.map((param: any) => {
                  // Получаем ключ параметра
                  const paramKey = param.name;

                  // Проверяем, выбран ли данный параметр
                  const isActive =
                    selectedParams[paramKey]?.id === param.Parameter_ID;

                  return (
                    <div
                      key={`param-${param.Parameter_ID || Math.random()}`}
                      className={`parameters-item ${isActive ? "parameters-item--active" : ""}`}
                      onClick={() =>
                        addSettingItem(
                          {
                            id: param.Parameter_ID,
                            index: 0,
                            title: param.parameter_string,
                            price: param.price || 0,
                            old_price: param.old_price,
                          },
                          param.name
                        )
                      }
                    >
                      <p className="parameters-text">
                        {param.parameter_string || "Без названия"}
                      </p>
                    </div>
                  );
                })}
              </Slider>
            </div>
          </div>
        )}

        {/* Цвета товара в отдельную строку */}
        {targetProduct.colors?.length > 0 && (
          <div className="color-section">
            <h3 className="parameters-title">Цвет</h3>
            <div className="color-options">
              <Slider height={"42px"} between={"5px"}>
                {targetProduct.colors.map((color: any) => (
                  <div
                    key={`color-${color.Color_ID || Math.random()}`}
                    className={`color-option ${selectedColor?.Color_ID === color.Color_ID ? "color-option--active" : ""}`}
                    onClick={() => selectColor(color)}
                  >
                    <div
                      className="color-circle"
                      style={{ backgroundColor: color.Color_Code || "#ccc" }}
                    />
                    <p className="color-name">{color.Color_Name}</p>
                  </div>
                ))}
              </Slider>
            </div>
          </div>
        )}

        {/* Кнопка для просмотра видео - показываем только если есть видео */}
        {targetProduct.reviews_video?.length > 0 &&
          targetProduct.reviews_video[0]?.Video_URL && (
            <button onClick={scrollToVideo} className="video-button">
              <div className="video-button-content">
                <img
                  src={`${iconsBaseLink}video-link-icon.svg`}
                  alt="Видео"
                  onError={(e) => {
                    e.currentTarget.src = "/placeholder-icon.svg";
                  }}
                />

                <p className="video-button-text">Смотреть видео-обзор</p>
              </div>

              <img
                src={`${iconsBaseLink}dark-expand-icon.svg`}
                alt="Смотерть"
                className="expand-icon"
                onError={(e) => {
                  e.currentTarget.src = "/placeholder-icon.svg";
                }}
              />
            </button>
          )}

        {targetProduct.extras?.length > 0 &&
          targetProduct.extras[0]?.Characteristics && (
            <div
              className={`description-block ${isDescriptionOpen ? "description-block--open" : ""}`}
            >
              <div
                onClick={toggleDescriptionHandler}
                className="description-header"
              >
                <h3 className="description-title">
                  {dataStore.data?.special_project_parameters
                    ?.product_page_accordeon_item_header_12_value || "Описание"}
                </h3>

                <button
                  onClick={toggleDescriptionHandler}
                  className="description-expand-button cursor-pointer"
                >
                  <img
                    src={`${iconsBaseLink}dark-expand-icon.svg`}
                    className="description-expand-icon"
                    alt="Развернуть"
                    onError={(e) => {
                      e.currentTarget.src = "/placeholder-icon.svg";
                    }}
                  />
                </button>
              </div>

              <p ref={descriptionRef} className="description-text">
                {targetProduct.extras[0].Characteristics}
              </p>
            </div>
          )}

        {targetProduct.extras?.length > 0 && targetProduct.extras[0]?.Kit && (
          <div
            className={`specs-block ${isSpecsOpen ? "specs-block--open" : ""}`}
          >
            <div onClick={toggleSpecsHandler} className="specs-header">
              <h3 className="specs-title">
                {dataStore.data?.special_project_parameters
                  ?.product_page_accordeon_item_header_34_value ||
                  "Характеристики"}
              </h3>

              <button
                onClick={toggleSpecsHandler}
                className="specs-expand-button cursor-pointer"
              >
                <img
                  src={`${iconsBaseLink}dark-expand-icon.svg`}
                  className="specs-expand-icon"
                  alt="Развернуть"
                  onError={(e) => {
                    e.currentTarget.src = "/placeholder-icon.svg";
                  }}
                />
              </button>
            </div>

            <p ref={specsRef} className="specs-text">
              {targetProduct.extras[0].Kit}
            </p>
          </div>
        )}

        {dataStore.data?.special_project_parameters_badges?.length > 0 && (
          <div className="info-cards ">
            <Slider height={"100%"}>
              {dataStore.data.special_project_parameters_badges
                .slice(
                  0,
                  Math.min(
                    4,
                    dataStore.data.special_project_parameters_badges.length
                  )
                )
                .map((badge: any, index: number) => {
                  const cardInfo =
                    index < infoCards.length
                      ? infoCards[index]
                      : {
                          title: "Информация",
                          image: `${iconsBaseLink}about-icon.svg`,
                        };

                  return (
                    <div
                      key={badge.id || index}
                      onClick={() => openLinkTeletype(badge.url || "#")}
                      className="info-card click-effect-block"
                    >
                      <p className="info-text">{cardInfo.title}</p>

                      <img
                        src={cardInfo.image}
                        alt={cardInfo.title}
                        className="info-icon"
                        onError={(e) => {
                          e.currentTarget.src = "/placeholder-icon.svg";
                        }}
                      />
                    </div>
                  );
                })}
            </Slider>
          </div>
        )}

        {targetProduct.reviews?.length > 0 && (
          <div className="reviews-block">
            <h3 className="reviews-title">Отзывы</h3>

            <Swiper
              modules={[Pagination]}
              spaceBetween={10}
              slidesPerView={1}
              pagination={{ clickable: true }}
              className="reviews-content"
              style={{ width: "100%", height: "100%" }}
            >
              {targetProduct.reviews.map((review: any) => (
                <SwiperSlide key={review.Photo_ID || Math.random()}>
                  <div className="swiper-slide-content">
                    <img
                      src={review.Photo_URL || "/placeholder-review.jpg"}
                      alt="Отзыв пользователя"
                      onError={(e) => {
                        e.currentTarget.src = "/placeholder-review.jpg";
                      }}
                    />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>

            <button className="view-all-button" onClick={handleViewAllReviews}>
              <p className="view-all-text">Смотреть все отзывы</p>
            </button>
          </div>
        )}

        {targetProduct.reviews_video?.length > 0 && (
          <VideoReview video={targetProduct.reviews_video[0]} />
        )}

        <button
          onClick={handleAddToCart}
          className={`add-to-cart-button click-effect-block 
            ${isAddingToCart ? "add-to-cart-button--added" : ""}
            ${!isAddToCartEnabled || (targetProduct.colors?.length > 0 && !selectedColor) ? "add-to-cart-button--disabled" : ""}
            ${detectIOS() ? "add-to-cart-button--ios" : ""}`}
          disabled={
            !isAddToCartEnabled ||
            (targetProduct.colors?.length > 0 && !selectedColor)
          }
        >
          <p className="add-to-cart-text">
            {isAddingToCart ? "В корзину" : "Добавить в корзину"}
          </p>
        </button>
      </div>

      {/* Всплывающее сообщение об ошибке */}
      {errorMessage && (
        <div className="error-popup">
          <p>{errorMessage}</p>
        </div>
      )}
    </main>
  );
});

export default ProductContent;

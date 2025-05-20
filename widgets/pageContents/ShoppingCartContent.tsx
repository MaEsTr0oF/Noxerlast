"use client";
import { useState, useEffect } from "react";

import { observer } from "mobx-react-lite";
import { runInAction } from "mobx";

import { iconsBaseLink } from "@/utils/globalVariables";
import { projectData } from "@/data/fakeData";
import { dataStore } from "@/store/DataStore";
import { apiInstance } from "@/utils/api";
import axios, { AxiosError } from "axios";

import { shoppingCartStore } from "@/store/ShoppingCartStore";

import ProductsSection from "@/widgets/sections/ProductsSection";
import MaskedInput from "react-text-mask";
import "@/styles/widgets/shoppingCart.css";
import Loading from "@/shared/Loading";
import { NavLink } from "react-router-dom";
import { detectIOS } from "@/utils/detectIOS";

// Компонент всплывающего окна для отображения ошибок формы
const FormErrorModal = ({
  message,
  onClose,
  onRetry,
}: {
  message: string;
  onClose: () => void;
  onRetry?: () => void;
}) => {
  if (!message) return null;

  return (
    <div className="error-modal-overlay" onClick={onClose}>
      <div className="error-modal" onClick={(e) => e.stopPropagation()}>
        <button className="error-modal-close" onClick={onClose}>
          <img src={`${iconsBaseLink}close-icon.svg`} alt="Закрыть" />
        </button>
        <div className="error-modal-content">
          <h3 className="error-modal-title">Ошибка</h3>
          <p className="error-modal-message">{message}</p>
          <div className="error-modal-buttons">
            <button className="error-modal-button" onClick={onClose}>
              Закрыть
            </button>
            {onRetry && (
              <button
                className="error-modal-button error-modal-retry"
                onClick={onRetry}
              >
                Повторить
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

const SuccessModal = ({
  onClose,
  orderResponse,
  orderProducts,
  onPay,
}: {
  onClose: () => void;
  orderResponse: any;
  orderProducts: any[];
  onPay: () => void;
}) => {
  const paymentDescription =
    dataStore.data?.special_project_parameters
      ?.PAYMENT_SYSTEM_INSERT_TEXT_description || "";
  const paymentExtraInfo =
    dataStore.data?.special_project_parameters
      ?.PAYMENT_SYSTEM_INSERT_TEXT_extra_field_1 || "";
  const isOfflinePayment = orderResponse?.payment_type === "delivery"; // Предполагаем, что orderResponse содержит тип оплаты
  const deliveryPrice =
    parseFloat(
      isOfflinePayment
        ? dataStore.data?.special_project_parameters
            ?.cart_delivery_price_offline_value
        : dataStore.data?.special_project_parameters?.cart_delivery_price_value
    ) || 0;

  return (
    <div className="error-modal-overlay" onClick={onClose}>
      <div
        className="error-modal order-success-modal"
        onClick={(e) => e.stopPropagation()}
      >
        <button className="error-modal-close" onClick={onClose}>
          <img src={`${iconsBaseLink}close-icon.svg`} alt="Закрыть" />
        </button>

        <div className="success-modal-content">
          <div className="success-top-info">
            <div dangerouslySetInnerHTML={{ __html: paymentDescription }} />

            {orderResponse?.order_id && (
              <div className="order-id">Заказ: № {orderResponse.order_id}</div>
            )}
          </div>

          <div className="order-products-container">
            {orderProducts.map((product, index) => (
              <div className="order-product-item" key={index}>
                <div className="order-product-image">
                  <img
                    src={
                      product.selectedColor?.image ||
                      product.images[0].Image_URL
                    }
                    alt={product.Product_Name}
                  />
                </div>
                <div className="order-product-info">
                  <div className="order-product-name">
                    {product.Product_Name}
                  </div>
                  {product.parameters && (
                    <div className="order-product-size">
                      {product.parameters.name === "Размер обуви"
                        ? "Размер"
                        : product.parameters.name}
                      : {product.parameters.parameter_string}
                    </div>
                  )}
                  {product.selectedColor && (
                    <div className="order-product-color">
                      Цвет: {product.selectedColor.name}
                      <span
                        className="color-dot"
                        style={{
                          backgroundColor: product.selectedColor.code || "#ccc",
                        }}
                      />
                    </div>
                  )}
                  <div className="order-product-price">
                    {product.final_price || product.parameters.price} ₽
                  </div>
                </div>
                <div className="order-product-quantity">
                  x{product.quantity || 1}
                </div>
              </div>
            ))}
          </div>

          <div className="order-total">
            <div className="order-total-text">Итого:</div>
            <div className="order-total-price">
              {orderProducts.reduce(
                (sum, product) =>
                  sum + product.parameters.price * (product.quantity || 1),
                0
              ) + deliveryPrice}{" "}
              ₽
            </div>
          </div>

          {orderResponse?.payment_link && (
            <div className="payment-link-container">
              <p className="payment-link-label">Ваша ссылка на оплату:</p>
              <a
                href={orderResponse.payment_link}
                target="_blank"
                rel="noopener noreferrer"
                className="payment-link-button"
                onClick={onPay}
              >
                <span className="payment-link-text">ОПЛАТИТЬ</span>
              </a>
              <p className="payment-link-help">
                Если ссылка не открылась автоматически, пожалуйста, нажмите на
                неё повторно.
              </p>
            </div>
          )}

          <div
            dangerouslySetInnerHTML={{ __html: paymentExtraInfo }}
            className="payment-extra-info"
          />
        </div>
      </div>
    </div>
  );
};

// Модальное окно для оформления заказа напрямую через менеджера
const ContactManagerModal = ({
  onClose,
  orderResponse,
  orderProducts,
  managerContact,
  onContactClick,
}: {
  onClose: () => void;
  orderResponse: any;
  orderProducts: any[];
  managerContact: string;
  onContactClick: () => void;
}) => {
  const paymentDescription =
    dataStore.data?.special_project_parameters
      ?.PAYMENT_SYSTEM_INSERT_TEXT_description || "";
  const deliveryPrice =
    parseFloat(
      dataStore.data?.special_project_parameters
        ?.cart_delivery_price_offline_value
    ) || 0;

  // Получаем настройки контакта менеджера
  const managerButtonText =
    dataStore.data?.special_project_parameters?.manager_button_text ||
    "Связаться с менеджером";
  const managerDisplayContact =
    dataStore.data?.special_project_parameters?.manager_display_contact ||
    managerContact;

  // Определяем тип контакта (telegram, whatsapp, vk и т.д.)
  const getContactUrl = (contact: string) => {
    if (!contact) return "#";

    // Удаляем @ если есть
    const cleanContact = contact.replace(/^@/, "");

    // Определяем тип по началу строки
    if (contact.startsWith("@") || contact.includes("t.me/")) {
      return `https://t.me/${cleanContact}`;
    } else if (contact.includes("wa.me/") || contact.includes("whatsapp")) {
      return `https://wa.me/${cleanContact.replace(/\D/g, "")}`;
    } else if (contact.includes("vk.com")) {
      return `https://vk.com/${cleanContact.replace("vk.com/", "")}`;
    } else {
      // Пробуем определить по формату
      const isPhone = /^[+\d\s()-]{10,}$/.test(contact);
      if (isPhone) {
        return `https://wa.me/${cleanContact.replace(/\D/g, "")}`;
      }

      // По умолчанию считаем Telegram
      return `https://t.me/${cleanContact}`;
    }
  };

  const contactUrl = getContactUrl(managerContact);

  return (
    <div className="error-modal-overlay" onClick={onClose}>
      <div
        className="error-modal order-success-modal"
        onClick={(e) => e.stopPropagation()}
      >
        <button className="error-modal-close" onClick={onClose}>
          <img src={`${iconsBaseLink}close-icon.svg`} alt="Закрыть" />
        </button>

        <div className="success-modal-content">
          <div className="success-top-info">
            <div dangerouslySetInnerHTML={{ __html: paymentDescription }} />

            {orderResponse?.order_id && (
              <div className="order-id">Заказ: № {orderResponse.order_id}</div>
            )}
          </div>

          <div className="order-products-container">
            {orderProducts.map((product, index) => (
              <div className="order-product-item" key={index}>
                <div className="order-product-image">
                  <img
                    src={
                      product.selectedColor?.image ||
                      product.images[0].Image_URL
                    }
                    alt={product.Product_Name}
                  />
                </div>
                <div className="order-product-info">
                  <div className="order-product-name">
                    {product.Product_Name}
                  </div>
                  {product.parameters && (
                    <div className="order-product-size">
                      {product.parameters.name === "Размер обуви"
                        ? "Размер"
                        : product.parameters.name}
                      : {product.parameters.parameter_string}
                    </div>
                  )}
                  {product.selectedColor && (
                    <div className="order-product-color">
                      Цвет: {product.selectedColor.name}
                      <span
                        className="color-dot"
                        style={{
                          backgroundColor: product.selectedColor.code || "#ccc",
                        }}
                      />
                    </div>
                  )}
                  <div className="order-product-price">
                    {product.final_price || product.parameters.price} ₽
                  </div>
                </div>
                <div className="order-product-quantity">
                  x{product.quantity || 1}
                </div>
              </div>
            ))}
          </div>

          <div className="order-total">
            <div className="order-total-text">Итого:</div>
            <div className="order-total-price">
              {orderProducts.reduce(
                (sum, product) =>
                  sum +
                  (product.final_price || product.parameters?.price || 0) *
                    (product.quantity || 1),
                0
              ) + deliveryPrice}{" "}
              ₽
            </div>
          </div>

          <div className="contact-manager-container">
            <p className="contact-manager-text">
              Для оплаты заказа свяжитесь с менеджером:
            </p>
            <a
              href={contactUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="contact-manager-button"
              onClick={onContactClick}
            >
              <div className="contact-manager-telegram-icon">
                <svg
                  width="25"
                  height="24"
                  viewBox="0 0 25 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clipPath="url(#a)" fillRule="evenodd" clipRule="evenodd">
                    <path
                      d="M24.5 12c0-6.628-5.372-12-12-12S.5 5.372.5 12s5.372 12 12 12 12-5.372 12-12"
                      fill="url(#b)"
                    />
                    <path
                      d="m5.666 11.297 7.797-3.238c.77-.338 3.381-1.417 3.381-1.417s1.205-.473 1.105.675c-.034.472-.302 2.124-.57 3.912l-.836 5.295s-.067.776-.636.911-1.506-.472-1.673-.607c-.134-.101-2.51-1.619-3.38-2.36-.235-.203-.503-.608.033-1.08a129 129 0 0 0 3.514-3.373c.402-.405.804-1.35-.87-.203l-4.719 3.205s-.535.337-1.54.033c-1.003-.303-2.175-.708-2.175-.708s-.803-.506.57-1.045z"
                      fill="#fff"
                    />
                  </g>
                  <defs>
                    <linearGradient
                      id="b"
                      x1="55.831"
                      y1="13.231"
                      x2="34.179"
                      y2="61.344"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#37AEE2" />
                      <stop offset="1" stopColor="#1E96C8" />
                    </linearGradient>
                    <clipPath id="a">
                      <path fill="#fff" d="M.5 0h24v24H.5z" />
                    </clipPath>
                  </defs>
                </svg>
              </div>
              <span className="contact-manager-text">
                {managerDisplayContact}
              </span>
            </a>
            <p className="contact-manager-instructions">
              Укажите номер заказа при общении с менеджером для быстрой
              обработки.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

// Модальное окно для Softpay
const SoftpayPaymentModal = ({
  onClose,
  orderResponse,
  orderProducts,
  onConfirm,
}: {
  onClose: () => void;
  orderResponse: any;
  orderProducts: any[];
  onConfirm: () => void;
}) => {
  const paymentDescriptionHtml =
    dataStore.data?.special_project_parameters
      ?.PAYMENT_SYSTEM_INSERT_TEXT_description ||
    '<p class="cart-link-popup-imitator-container-thanksForOrder">Спасибо за заказ!</p>'; // Исправлено
  const paymentInstructionsHtml =
    dataStore.data?.special_project_parameters
      ?.PAYMENT_SYSTEM_INSERT_TEXT_extra_field_1 || "";
  const deliveryPrice =
    parseFloat(
      dataStore.data?.special_project_parameters?.cart_delivery_price_value // Softpay обычно онлайн
    ) || 0;

  return (
    <div className="error-modal-overlay" onClick={onClose}>
      <div
        className="error-modal order-success-modal softpay-modal"
        onClick={(e) => e.stopPropagation()}
      >
        <button className="error-modal-close" onClick={onClose}>
          <img src={`${iconsBaseLink}close-icon.svg`} alt="Закрыть" />
        </button>

        <div className="success-modal-content">
          <div className="success-top-info">
            <div dangerouslySetInnerHTML={{ __html: paymentDescriptionHtml }} />
            {orderResponse?.order_id && (
              <div className="order-id">Заказ № {orderResponse.order_id}</div>
            )}
          </div>

          <div className="order-products-container">
            {orderProducts.map((product, index) => (
              <div className="order-product-item" key={index}>
                <div className="order-product-image">
                  <img
                    src={
                      product.selectedColor?.image ||
                      product.images[0].Image_URL
                    }
                    alt={product.Product_Name}
                  />
                </div>
                <div className="order-product-info">
                  <div className="order-product-name">
                    {product.Product_Name}
                  </div>
                  {product.parameters && (
                    <div className="order-product-size">
                      {product.parameters.name === "Размер обуви"
                        ? "Размер"
                        : product.parameters.name}
                      : {product.parameters.parameter_string}
                    </div>
                  )}
                  {product.selectedColor && (
                    <div className="order-product-color">
                      Цвет: {product.selectedColor.name}
                      <span
                        className="color-dot"
                        style={{
                          backgroundColor: product.selectedColor.code || "#ccc",
                        }}
                      />
                    </div>
                  )}
                  <div className="order-product-price">
                    {product.final_price || product.parameters.price} ₽
                  </div>
                </div>
                <div className="order-product-quantity">
                  x{product.quantity || 1}
                </div>
              </div>
            ))}
          </div>

          <div className="order-total">
            <div className="order-total-text">Итого:</div>
            <div className="order-total-price">
              {orderProducts.reduce(
                (sum, product) =>
                  sum + product.parameters.price * (product.quantity || 1),
                0
              ) + deliveryPrice}{" "}
              ₽
            </div>
          </div>

          <div
            className="payment-instructions-softpay"
            dangerouslySetInnerHTML={{ __html: paymentInstructionsHtml }}
          />

          <button
            className="error-modal-button softpay-confirm-button"
            onClick={onConfirm}
          >
            Хорошо
          </button>
        </div>
      </div>
    </div>
  );
};

const ShoppingCartContent = observer(() => {
  const [typePaymentId, setTypePaymentId] = useState(1);
  const [allowPostPayment, setAllowPostPayment] = useState(false);
  const [showErrorModal, setShowErrorModal] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [isIOS, setIsIOS] = useState(false);
  const [isLoading, setIsLoading] = useState<boolean | "pending">("pending");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [orderResponse, setOrderResponse] = useState<any>(null);
  const [orderProducts, setOrderProducts] = useState<any[]>([]);
  const [currentOrderData, setCurrentOrderData] = useState<any>(null);

  const [fio, setFio] = useState("");
  const [fioError, setFioError] = useState("");
  const [phoneError, setPhoneError] = useState("");
  const [cityError, setCityError] = useState("");
  const [houseError, setHouseError] = useState("");
  const [apartmentError, setApartmentError] = useState("");
  const [commentError, setCommentError] = useState("");
  const [promocodeError, setPromocodeError] = useState("");
  const [formError, setFormError] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [house, setHouse] = useState("");
  const [apartment, setApartment] = useState("");
  const [comment, setComment] = useState("");
  const [promocode, setPromocode] = useState("");
  const [productsLimit, setProductsLimit] = useState(2);

  // Маска для номера телефона в формате +7 (XXX) XXX XX-XX
  const phoneMask = [
    "+",
    "7",
    " ",
    "(",
    /[0-9]/,
    /[0-9]/,
    /[0-9]/,
    ")",
    " ",
    /[0-9]/,
    /[0-9]/,
    /[0-9]/,
    " ",
    /[0-9]/,
    /[0-9]/,
    "-",
    /[0-9]/,
    /[0-9]/,
  ];

  const validateFio = (value: string) => {
    const onlyLettersRegex = /^[а-яА-ЯёЁa-zA-Z\s-]+$/;

    if (!value) {
      setFioError("");
      return true;
    }

    if (!onlyLettersRegex.test(value)) {
      setFioError("Только буквы, пробелы и дефисы");
      return false;
    } else {
      setFioError("");
      return true;
    }
  };

  const validatePhone = (value: string) => {
    if (!value) {
      setPhoneError("");
      return false;
    }

    if (value.includes("_") || value.length < 18) {
      setPhoneError("Введите полный номер телефона");
      return false;
    } else {
      setPhoneError("");
      return true;
    }
  };

  const handleFioChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;

    const onlyLettersRegex = /^[а-яА-ЯёЁa-zA-Z\s-]*$/;

    if (onlyLettersRegex.test(value)) {
      setFio(value);
      if (fioError) {
        setFioError("");
      }
    } else {
      setFioError("Только буквы и пробелы");
    }
  };

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setPhone(value);
    validatePhone(value);
  };

  const handleCityChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setCity(value);
    if (!value.trim()) {
      setCityError("Введите город и улицу");
    } else {
      setCityError("");
    }
  };

  const handleHouseChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setHouse(value);
    if (!value.trim()) {
      setHouseError("Введите номер дома");
    } else {
      setHouseError("");
    }
  };

  const resetForm = () => {
    setFio("");
    setPhone("");
    setCity("");
    setHouse("");
    setApartment("");
    setAddress("");
    setComment("");
    setPromocode("");
    setFioError("");
    setPhoneError("");
    setCityError("");
    setHouseError("");
    setApartmentError("");
    setCommentError("");
    setPromocodeError("");
    setFormError("");
  };

  const updateProductsLimit = () => {
    if (typeof window !== "undefined") {
      setProductsLimit(window.innerWidth >= 540 ? 3 : 2);
    }
  };

  const getTotalOrderPrice = (): number => {
    return shoppingCartStore.items.reduce(
      (acc, item) => acc + item.parameters.price * (item.quantity || 1),
      0
    );
  };

  // Получаем скидочные параметры из API
  const actions = dataStore.data?.special_project_parameters_actions || [];
  const discountAction = actions.find((a: any) => a.action_type === "p23");
  const discount10 = discountAction ? Number(discountAction.extra_field_1) : 0;
  const discount15 = discountAction ? Number(discountAction.extra_field_2) : 0;

  const getSalePrice = (): number => {
    // Определяем количество товаров с учётом quantity
    const itemCount = shoppingCartStore.items.reduce(
      (acc, item) => acc + (item.quantity || 1),
      0
    );

    if (!discountAction || itemCount < 2) {
      return 0;
    } else if (itemCount === 2) {
      return Math.ceil(getTotalOrderPrice() * (discount10 / 100));
    } else {
      return Math.ceil(getTotalOrderPrice() * (discount15 / 100));
    }
  };

  const getProductsCountText = () => {
    const totalQuantity = shoppingCartStore.items.reduce(
      (acc, item) => acc + (item.quantity || 1),
      0
    );

    if (totalQuantity === 0) {
      return "Товары в корзине отсутствуют";
    } else if (totalQuantity === 1) {
      return "товар";
    } else if (totalQuantity > 1 && totalQuantity < 5) {
      return "товара";
    } else {
      return "товаров";
    }
  };

  const recommendedProducts = projectData?.products
    ?.filter((product) => product.OnMain === true)
    .slice(0, 4);

  const stopPropagation = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
  };

  const removeFromLocalStorage = (
    productId: number,
    productTitle: string,
    colorId?: number
  ) => {
    if (typeof window !== "undefined") {
      const addedSettingItems = localStorage.getItem("addedSettingItems");
      if (addedSettingItems) {
        try {
          const items = JSON.parse(addedSettingItems);

          // Находим параметр в корзине, чтобы получить его ID
          const product = shoppingCartStore.items.find(
            (item) =>
              item.Product_ID === productId &&
              (!productTitle ||
                item.parameters?.parameter_string === productTitle) &&
              (!colorId || item.selectedColor?.id === colorId)
          );

          if (product) {
            const paramId = product.parameters?.Parameter_ID;
            const productColorId = product.selectedColor?.id;

            // Фильтруем элементы, сохраняя те, которые не соответствуют удаляемому товару
            const filteredItems = items.filter((item: any) => {
              // Проверка параметров и цвета товара
              const differentProduct = item.productId !== productId;
              const differentParam = paramId && item.id !== paramId;
              const differentColor =
                productColorId && item.colorId !== productColorId;

              // Результат проверки для текущего элемента
              const keepItem =
                differentProduct || differentParam || differentColor;

              // Оставляем элемент, если это другой товар или другие параметры/цвет
              return keepItem;
            });

            localStorage.setItem(
              "addedSettingItems",
              JSON.stringify(filteredItems)
            );
          }
        } catch (error) {
          console.error("Ошибка при обработке данных из localStorage:", error);
        }
      }
    }
  };

  const removeSpecificProductFromCart = (
    productId: number,
    productName: string,
    parameterString?: string,
    colorId?: number
  ) => {
    // Удаляем товар из локального хранилища
    removeFromLocalStorage(productId, parameterString || "", colorId);

    // Удаляем конкретный товар из корзины
    runInAction(() => {
      const initialCount = shoppingCartStore.items.length;

      shoppingCartStore.items = shoppingCartStore.items.filter((item) => {
        // Проверяем, не совпадает ли товар с тем, который нужно удалить
        const matchesProduct = item.Product_ID === productId;
        const matchesParam =
          !parameterString ||
          item.parameters?.parameter_string === parameterString;
        const matchesColor = !colorId || item.selectedColor?.id === colorId;

        // Результат проверки
        const shouldRemove = matchesProduct && matchesParam && matchesColor;

        // Оставляем товар, если он не соответствует условиям удаления
        return !shouldRemove;
      });
    });

    const colorInfo = colorId ? ` и цветом ID: ${colorId}` : "";
  };

  const validateForm = () => {
    let isValid = true;
    let errorFields = [];

    setFioError("");
    setPhoneError("");
    setCityError("");
    setHouseError("");
    setFormError("");

    if (!fio.trim()) {
      setFioError("error");
      isValid = false;
      errorFields.push("ФИО");
    }

    if (!phone || phone.includes("_") || phone.length < 18) {
      setPhoneError("error");
      isValid = false;
      errorFields.push("Телефон");
    }

    if (!city.trim()) {
      setCityError("error");
      isValid = false;
      errorFields.push("Город и улица");
    }

    if (!house.trim()) {
      setHouseError("error");
      isValid = false;
      errorFields.push("Дом");
    }

    // Если товаров в корзине нет, то заказ оформить нельзя
    if (shoppingCartStore.items.length === 0) {
      setFormError("Корзина пуста. Добавьте товары для оформления заказа.");
      setShowErrorModal(true);
      isValid = false;
    } else if (errorFields.length > 0) {
      // Показываем сообщение о незаполненных полях
      setFormError(
        `Пожалуйста, заполните следующие поля: ${errorFields.join(", ")}`
      );
      setShowErrorModal(true);
    }

    return isValid;
  };

  const handlePayment = () => {
    // Только после нажатия на кнопку оплаты очищаем корзину и форму
    resetForm();
    shoppingCartStore.clearCart();
    clearLocalStorageExceptFirst3();
    setShowSuccessModal(false);
  };

  const handleSoftpayConfirm = () => {
    // Действия после подтверждения оплаты Softpay
    // (например, очистка корзины, формы, localStorage)
    resetForm();
    shoppingCartStore.clearCart();
    clearLocalStorageExceptFirst3();
    setShowSuccessModal(false); // Закрываем модальное окно Softpay
  };

  const handleContactClick = () => {
    // Очищаем корзину, форму и localStorage при клике на ссылку менеджера
    resetForm();
    shoppingCartStore.clearCart();
    clearLocalStorageExceptFirst3();
    setShowSuccessModal(false);

    // Вместо использования window.Telegram.WebApp
    try {
      // Проверяем, существует ли объект Telegram
      if (window.Telegram && window.Telegram.WebApp) {
        // Безопасно пытаемся вызвать метод
        const managerContact =
          dataStore.data?.special_project_parameters
            ?.telegram_manager_contact_value;

        if (managerContact) {
          const cleanContact = managerContact.replace(/^@/, "");
          window.Telegram.WebApp.openLink(`https://t.me/${cleanContact}`);
          return false; // Предотвращаем стандартное поведение ссылки
        }
      }
    } catch (error) {
      // Ошибки не останавливают выполнение
    }
  };

  const getCurrentDeliveryPrice = () => {
    const isOffline = allowPostPayment && typePaymentId === 2;
    return (
      parseFloat(
        isOffline
          ? dataStore.data?.special_project_parameters
              ?.cart_delivery_price_offline_value
          : dataStore.data?.special_project_parameters
              ?.cart_delivery_price_value
      ) || 0
    );
  };

  // Функция для обработки размещения заказа
  const handleMakeOrder = async () => {
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    // Фильтруем айтемы для заказа
    const itemsForOrder = shoppingCartStore.items
      .filter((item) => item.quantity && item.quantity > 0)
      .map((item) => {
        // Базовая цена товара
        const basePrice = item.parameters?.price || item.Price || 0;

        // Скидка на цвет если есть
        const colorDiscount = item.selectedColor?.discount || 0;

        // Финальная цена с учетом скидки (абсолютное значение)
        const finalPrice = Math.max(0, basePrice - colorDiscount);

        return {
          ID: item.Product_ID,
          name: item.Name,
          price: finalPrice,
          quantity: item.quantity || 0,
          parameter: item.parameters?.parameter_string || "",
          color: item.selectedColor
            ? {
                name: item.selectedColor.name,
                code: item.selectedColor.code,
              }
            : null,
        };
      });

    // Преобразуем телефон, убирая все нецифровые символы
    const phoneValue = phone ? phone.replace(/[^\d+]/g, "") : "";

    // Создаем массив продуктов для API
    const productsForApi = shoppingCartStore.items.map((item) => {
      // Базовая информация о товаре
      const productData: any = {
        product_id: item.Product_ID,
        parameter_id: item.parameters?.Parameter_ID || 0,
        quantity: item.quantity || 1,
      };

      // Добавляем цвет только если он выбран
      if (item.selectedColor?.id) {
        productData.color = item.selectedColor.id;
      }

      return productData;
    });

    // Создаем объект заказа с только необходимыми данными
    const orderData = {
      tg_user_id:
        window.Telegram?.WebApp?.initDataUnsafe?.user?.id || 749991691,
      fio: fio,
      phone: phoneValue,
      city: city,
      house: house,
      apartment: apartment,
      comment: comment,
      payment_type:
        allowPostPayment && typePaymentId === 2 ? "delivery" : "online",
      promocode: promocode || "",
      products: productsForApi,
    };

    console.log(orderData)

    // Сохраняем данные текущего заказа для возможности повторной отправки
    setCurrentOrderData(orderData);

    try {
      // Устанавливаем состояние загрузки
      setIsLoading(true);

      // Отправляем заказ на API
      const response = await apiInstance.post("/order", orderData);

      // Сохраняем информацию о товарах заказа для отображения в модальном окне
      const productsForOrder = [...shoppingCartStore.items];
      setOrderProducts(productsForOrder);

      // Сохраняем ответ от API
      setOrderResponse(response.data);

      // Очищаем корзину после успешного размещения заказа
      runInAction(() => {
        shoppingCartStore.items = [];
        localStorage.removeItem("addedSettingItems");
      });

      // Показываем модальное окно успеха
      setShowSuccessModal(true);

      // По завершении процесса заказа
      setIsLoading(false);
      setIsSubmitting(false);
    } catch (error) {
      // Получаем сообщение об ошибке из ответа API (если есть)
      let errorMessage =
        "Не удалось отправить заказ. Пожалуйста, попробуйте позже.";

      const axiosError = error as AxiosError;

      if (axiosError.response) {
        // Ошибка от сервера
        if (
          axiosError.response.data &&
          typeof axiosError.response.data === "object" &&
          "message" in axiosError.response.data
        ) {
          errorMessage = axiosError.response.data.message as string;
        } else if (axiosError.response.status === 400) {
          errorMessage =
            "Некорректные данные заказа. Пожалуйста, проверьте введенную информацию.";
        } else if (axiosError.response.status === 401) {
          errorMessage = "Необходима авторизация для оформления заказа.";
        } else if (axiosError.response.status === 500) {
          errorMessage =
            "Внутренняя ошибка сервера. Пожалуйста, попробуйте позже.";
        }
      } else if (axiosError.request) {
        // Запрос был отправлен, но нет ответа
        errorMessage =
          "Сервер не отвечает. Пожалуйста, проверьте ваше соединение с интернетом.";
      }

      // Устанавливаем сообщение об ошибке и показываем модальное окно
      setFormError(errorMessage);
      setShowErrorModal(true);
      setIsLoading(false);
      setIsSubmitting(false);
    }
  };

  const clearLocalStorageExceptFirst3 = () => {
    if (typeof window !== "undefined") {
      const keys = Object.keys(localStorage);
      const keysToKeep = ["DataStore", "FavoritesStore", "ShoppingCartStore"];
      keys.forEach((key) => {
        if (!keysToKeep.includes(key)) {
          localStorage.removeItem(key);
        }
      });
    }
  };

  const closeErrorModal = () => {
    setShowErrorModal(false);
  };

  const closeSuccessModal = () => {
    setShowSuccessModal(false);
  };

  // Функция для повторной отправки заказа
  const retryOrder = async () => {
    if (!currentOrderData) {
      setFormError(
        "Не удалось повторить отправку заказа. Попробуйте снова заполнить форму."
      );
      setShowErrorModal(true);
      return;
    }

    setIsSubmitting(true);
    setShowErrorModal(false);

    try {
      // Отправляем заказ на API повторно
      const response = await apiInstance.post("/order", currentOrderData);

      // Сохраняем ответ от API
      setOrderResponse(response.data);

      // Очищаем корзину после успешного размещения заказа
      runInAction(() => {
        shoppingCartStore.items = [];
        localStorage.removeItem("addedSettingItems");
      });

      // Показываем модальное окно успеха
      setShowSuccessModal(true);

      // По завершении процесса заказа
      setIsLoading(false);
      setIsSubmitting(false);
      // Очищаем данные текущего заказа
      setCurrentOrderData(null);
    } catch (error) {
      // Обработка ошибок осталась такой же, как в основной функции handleMakeOrder
      let errorMessage =
        "Не удалось отправить заказ. Пожалуйста, попробуйте позже.";

      const axiosError = error as AxiosError;

      if (axiosError.response) {
        if (
          axiosError.response.data &&
          typeof axiosError.response.data === "object" &&
          "message" in axiosError.response.data
        ) {
          errorMessage = axiosError.response.data.message as string;
        } else if (axiosError.response.status === 400) {
          errorMessage =
            "Некорректные данные заказа. Пожалуйста, проверьте введенную информацию.";
        } else if (axiosError.response.status === 401) {
          errorMessage = "Необходима авторизация для оформления заказа.";
        } else if (axiosError.response.status === 500) {
          errorMessage =
            "Внутренняя ошибка сервера. Пожалуйста, попробуйте позже.";
        }
      } else if (axiosError.request) {
        errorMessage =
          "Сервер не отвечает. Пожалуйста, проверьте ваше соединение с интернетом.";
      }

      setFormError(errorMessage);
      setShowErrorModal(true);
      setIsLoading(false);
      setIsSubmitting(false);
    }
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      setIsIOS(detectIOS());
    }

    updateProductsLimit();

    window.addEventListener("resize", updateProductsLimit);

    const postPaymentAllowed =
      dataStore.data?.special_project_parameters
        ?.cart_allow_post_payment_value === "yes";
    setAllowPostPayment(postPaymentAllowed);

    if (!postPaymentAllowed) {
      setTypePaymentId(1);
    }

    return () => {
      window.removeEventListener("resize", updateProductsLimit);
    };
  }, [dataStore.data]); // Добавляем dataStore.data в зависимости

  useEffect(() => {
    if (shoppingCartStore.items.length === 0) setIsLoading(false);
    else setIsLoading(true);
  }, [shoppingCartStore.items]);

  return (
    <main
      data-page="cart"
      className={`mt-[15px] px-[10px] w-full shoppingCart-main ${isIOS ? "shoppingCart-main--ios" : ""}`}
    >
      {showErrorModal && (
        <FormErrorModal
          message={formError}
          onClose={closeErrorModal}
          onRetry={currentOrderData ? retryOrder : undefined}
        />
      )}

      {showSuccessModal &&
        dataStore.data?.special_project_parameters?.PAYMENT_SYSTEM_value ===
          "yokassa" && (
          <SuccessModal
            onClose={closeSuccessModal}
            orderResponse={orderResponse}
            orderProducts={orderProducts}
            onPay={handlePayment}
          />
        )}

      {showSuccessModal &&
        dataStore.data?.special_project_parameters?.PAYMENT_SYSTEM_value ===
          "no" && (
          <ContactManagerModal
            onClose={closeSuccessModal}
            orderResponse={orderResponse}
            orderProducts={orderProducts}
            managerContact={
              dataStore.data?.special_project_parameters
                ?.telegram_manager_contact_value
            }
            onContactClick={handleContactClick}
          />
        )}

      {showSuccessModal &&
        dataStore.data?.special_project_parameters?.PAYMENT_SYSTEM_value ===
          "softpay" && (
          <SoftpayPaymentModal
            onClose={closeSuccessModal}
            orderResponse={orderResponse}
            orderProducts={orderProducts}
            onConfirm={handleSoftpayConfirm} // Используем новый обработчик
          />
        )}

      {isLoading === "pending" ? (
        <Loading />
      ) : (
        <>
          {isLoading === true && (
            <div className="shoppingCart-header">
              <h1 className="shoppingCart-header-title">Корзина</h1>

              {shoppingCartStore.items.length > 0 && (
                <button
                  onClick={() => {
                    shoppingCartStore.clearCart();
                    clearLocalStorageExceptFirst3();
                  }}
                  className="shoppingCart-header-button"
                >
                  Очистить корзину
                </button>
              )}
            </div>
          )}

          {isLoading === false ? (
            <div
              className={`empty-cart  
                ${detectIOS() ? "empty-cart--ios" : ""}
                `}
            >
              <div className="empty-cart-text">
                <p className="empty-cart-message">Корзина пуста</p>
                <p className="empty-cart-suggestion">
                  Воспользуйтесь каталогом <br /> или поиском для выбора товаров
                </p>
              </div>

              <div className="recommended-products">
                <h2 className="recommended-title">Рекомендуем</h2>
                <div className="limited-products-grid">
                  <ProductsSection
                    isFavorites={false}
                    limit={productsLimit}
                    importanceFilter={true}
                  />
                </div>
              </div>
            </div>
          ) : (
            <>
              <div className="shoppingCart-productsContainer">
                {shoppingCartStore.items?.map((product: any, index: number) => (
                  <NavLink
                    to={`/product/${product.Product_ID}`}
                    key={index}
                    className="shoppingCart-product"
                  >
                    <div
                      onClick={stopPropagation}
                      className="shoppingCart-product-image-container"
                    >
                      <img
                        className="shoppingCart-product-image"
                        src={
                          product.selectedColor?.image ||
                          product.images[0].Image_URL
                        }
                        alt=""
                      />
                    </div>

                    <div className="shoppingCart-product-info">
                      <div className="shoppingCart-product-nameSize">
                        <div className="shoppingCart-product-name">
                          {product.Product_Name}
                        </div>

                        {product.parameters && (
                          <div className="shoppingCart-product-size">
                            {product.parameters.name === "Размер обуви"
                              ? "Размер"
                              : product.parameters.name}
                            : {product.parameters.parameter_string}
                          </div>
                        )}

                        {product.selectedColor && (
                          <div className="shoppingCart-product-color">
                            Цвет:{" "}
                            <span className="color-name">
                              {product.selectedColor.name}
                            </span>
                            <span
                              className="color-dot"
                              style={{
                                backgroundColor:
                                  product.selectedColor.code || "#ccc",
                              }}
                            />
                          </div>
                        )}
                      </div>

                      <div className="shoppingCart-product-priceQuantity">
                        <div className="shoppingCart-product-priceWrapper">
                          <p className="shoppingCart-product-price">
                            {product.final_price || product.parameters.price} ₽
                          </p>

                          {product.selectedColor?.discount > 0 && (
                            <p className="shoppingCart-product-oldPrice">
                              {product.parameters.price} ₽
                            </p>
                          )}
                        </div>

                        <div
                          className="shoppingCart-product-quantityControl"
                          onClick={stopPropagation}
                        >
                          <button
                            type="button"
                            onClick={() =>
                              shoppingCartStore.decreaseQuantity(
                                product.Product_ID,
                                product.parameters?.parameter_string,
                                product.selectedColor?.id
                              )
                            }
                            className="shoppingCart-product-quantityControl-button"
                          >
                            -
                          </button>

                          <p className="shoppingCart-product-quantityControl-value">
                            {product.quantity || 1}
                          </p>

                          <button
                            type="button"
                            onClick={() =>
                              shoppingCartStore.increaseQuantity(
                                product.Product_ID,
                                product.parameters?.parameter_string,
                                product.selectedColor?.id
                              )
                            }
                            className="shoppingCart-product-quantityControl-button"
                          >
                            +
                          </button>
                        </div>
                      </div>
                    </div>

                    <button
                      type="button"
                      onClick={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        removeSpecificProductFromCart(
                          product.Product_ID,
                          product.Product_Name,
                          product.parameters?.parameter_string,
                          product.selectedColor?.id
                        );
                      }}
                      className="shoppingCart-product-delete"
                    >
                      <img
                        src={`${iconsBaseLink}close-icon.svg`}
                        alt=""
                        className="shoppingCart-product-delete-icon"
                      />
                    </button>
                  </NavLink>
                ))}
              </div>
              <form className="shoppingCart-form">
                <div className="shoppingCart-form-contactInfo">
                  <h2 className="shoppingCart-form-contactInfo-title">
                    Контактная информация
                  </h2>

                  <div className="shoppingCart-form-contactInfo-fieldsContainer">
                    <div className="input-wrapper">
                      <input
                        type="text"
                        placeholder="ФИО"
                        value={fio}
                        onChange={handleFioChange}
                        className={`shoppingCart-form-contactInfo-fieldsContainer-input ${fioError ? "input-error" : ""}`}
                      />
                    </div>

                    <div className="input-wrapper">
                      <MaskedInput
                        mask={phoneMask}
                        placeholder="+7 (___) ___ __-__"
                        guide={true}
                        value={phone}
                        onChange={handlePhoneChange}
                        type="tel"
                        className={`shoppingCart-form-contactInfo-fieldsContainer-input ${phoneError ? "input-error" : ""}`}
                      />
                    </div>
                  </div>
                </div>

                <div className="shoppingCart-form-deliveryInfo">
                  <h2 className="shoppingCart-form-deliveryInfo-title">
                    Способ доставки
                  </h2>

                  <button
                    type="button"
                    className="shoppingCart-form-deliveryInfo-cdekButton"
                  >
                    <div className="shoppingCart-form-deliveryInfo-cdekButton-top">
                      <img src={`${iconsBaseLink}cdek-icon.svg`} alt="" />

                      <p className="shoppingCart-form-deliveryInfo-cdekButton-top-text">
                        (выбор 97% клиентов)
                      </p>
                    </div>

                    <p className="shoppingCart-form-deliveryInfo-cdekButton-text">
                      Доставка осуществляется транспортной компанией CDEK по
                      тарифам компании. Нажмите "Выбрать адрес" и выберите пункт
                      выдачи на карте
                    </p>

                    <img
                      src={`${iconsBaseLink}payment-choiced-icon.svg`}
                      alt=""
                      className="shoppingCart-form-deliveryInfo-cdekButton-icon"
                    />
                  </button>

                  <h3 className="shoppingCart-form-deliveryInfo-addressTitle">
                    Адрес доставки (или СДЕК)
                  </h3>

                  <div className="shoppingCart-form-deliveryInfo-addressInputsContainer">
                    <input
                      type="text"
                      placeholder="Город и улица"
                      value={city}
                      onChange={handleCityChange}
                      className={`shoppingCart-form-deliveryInfo-fullWidthInput ${cityError ? "input-error" : ""}`}
                    />

                    <div className="shoppingCart-form-deliveryInfo-inputsRow">
                      <div className="input-wrapper">
                        <input
                          type="text"
                          placeholder="Дом"
                          value={house}
                          onChange={handleHouseChange}
                          className={`shoppingCart-form-deliveryInfo-halfWidthInput ${houseError ? "input-error" : ""}`}
                        />
                      </div>
                      <input
                        type="text"
                        placeholder="Квартира"
                        value={apartment}
                        onChange={(e) => setApartment(e.target.value)}
                        className="shoppingCart-form-deliveryInfo-halfWidthInput"
                      />
                    </div>

                    {/* <textarea placeholder="Примечание" value={address} onChange={(e) => setAddress(e.target.value)} className="shoppingCart-form-deliveryInfo-addressField" /> */}
                  </div>

                  <input
                    type="text"
                    placeholder="Комментарий к заказу"
                    onChange={(e) => setComment(e.target.value)}
                    className="shoppingCart-form-deliveryInfo-commentField"
                  />
                </div>

                {allowPostPayment && (
                  <div className="shoppingCart-form-paymentType">
                    <h2 className="shoppingCart-form-paymentType-title">
                      Тип оплаты
                    </h2>

                    <div className="shoppingCart-form-paymentType-buttons">
                      <button
                        type="button"
                        onClick={() => setTypePaymentId(1)}
                        className={`shoppingCart-form-paymentType-button ${typePaymentId === 1 && "shoppingCart-form-paymentType-button--active"}`}
                      >
                        <p className="shoppingCart-form-paymentType-text">
                          Оплата онлайн в приложении
                        </p>

                        <div className="shoppingCart-form-paymentType-checkbox">
                          {typePaymentId === 1 && (
                            <img
                              src={`${iconsBaseLink}payment-choiced-icon.svg`}
                              alt=""
                              className="shoppingCart-form-paymentType-icon"
                            />
                          )}
                        </div>
                      </button>

                      <button
                        type="button"
                        onClick={() => setTypePaymentId(2)}
                        className={`shoppingCart-form-paymentType-button ${typePaymentId === 2 && "shoppingCart-form-paymentType-button--active"}`}
                      >
                        <p className="shoppingCart-form-paymentType-text">
                          Оплата при получении
                        </p>

                        <div className="shoppingCart-form-paymentType-checkbox">
                          {typePaymentId === 2 && (
                            <img
                              src={`${iconsBaseLink}payment-choiced-icon.svg`}
                              alt=""
                              className="shoppingCart-form-paymentType-icon"
                            />
                          )}
                        </div>
                      </button>
                    </div>
                  </div>
                )}

                <div className="shoppingCart-form-paymentInfo">
                  <h2 className="shoppingCart-form-paymentInfo-title">
                    Форма оплаты
                  </h2>

                  <button className="shoppingCart-form-paymentInfo-sbpButton">
                    <div className="shoppingCart-form-paymentInfo-sbpButton-top">
                      <p className="shoppingCart-form-paymentInfo-sbpButton-top-text">
                        Оплата по СБП
                      </p>

                      <img src={`${iconsBaseLink}sbp-icon.svg`} alt="" />
                    </div>

                    <p className="shoppingCart-form-paymentInfo-sbpButton-text">
                      После оформления заказа вы сможете получить реквизиты для
                      оплаты по системе СБП
                    </p>

                    <img
                      src={`${iconsBaseLink}payment-choiced-icon.svg`}
                      alt=""
                      className="shoppingCart-form-paymentInfo-sbpButton-icon"
                    />
                  </button>
                </div>

                <div className="shoppingCart-form-totalInfo">
                  <h2 className="shoppingCart-form-totalInfo-title">
                    Промокод
                  </h2>

                  <input
                    type="text"
                    placeholder="Введите промокод"
                    onChange={(e) => setPromocode(e.target.value)}
                    className="shoppingCart-form-totalInfo-input"
                  />

                  <div className="shoppingCart-form-totalInfo-pricesContainer">
                    <div className="shoppingCart-form-totalInfo-pricesContainer-item">
                      <p className="shoppingCart-form-totalInfo-pricesContainer-item-text">
                        Сумма заказа
                      </p>

                      <p className="shoppingCart-form-totalInfo-pricesContainer-item-text">
                        {getTotalOrderPrice()} ₽
                      </p>
                    </div>

                    <div className="shoppingCart-form-totalInfo-pricesContainer-item">
                      <p className="shoppingCart-form-totalInfo-pricesContainer-item-text">
                        Доставка
                      </p>

                      <p className="shoppingCart-form-totalInfo-pricesContainer-item-text">
                        {getCurrentDeliveryPrice()} ₽
                      </p>
                    </div>
                    {getSalePrice() > 0 && (
                      <div className="shoppingCart-form-totalInfo-pricesContainer-item">
                        <p className="shoppingCart-form-totalInfo-pricesContainer-item-text">
                          Скидка
                        </p>
                        <p className="shoppingCart-form-totalInfo-pricesContainer-item-text">
                          -{getSalePrice()} ₽
                        </p>
                      </div>
                    )}
                  </div>

                  <div className="shoppingCart-form-totalInfo-summary">
                    <div className="shoppingCart-form-totalInfo-summary-top">
                      <p className="shoppingCart-form-totalInfo-summary-top-text">
                        Итого
                      </p>

                      <p className="shoppingCart-form-totalInfo-summary-top-text">
                        {allowPostPayment && typePaymentId === 2
                          ? getCurrentDeliveryPrice()
                          : getTotalOrderPrice() -
                            getSalePrice() +
                            getCurrentDeliveryPrice()}{" "}
                        ₽
                      </p>
                    </div>

                    <p className="shoppingCart-form-totalInfo-summary-count">
                      {shoppingCartStore.items.reduce(
                        (acc, item) => acc + (item.quantity || 1),
                        0
                      )}{" "}
                      {getProductsCountText()}
                    </p>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={handleMakeOrder}
                  className={`shoppingCart-form-makeOrderButton click-effect-block 
                    ${showSuccessModal ? "button-behind-modal" : ""}
                    ${isIOS ? "ios-button" : ""}
                    `}
                  disabled={isSubmitting}
                >
                  <p className="shoppingCart-form-makeOrderButton-text">
                    {isSubmitting ? "Оформление заказа..." : "Оплатить заказ"}
                  </p>
                </button>
                {formError && !showErrorModal && (
                  <div className="shoppingCart-form-error">{formError}</div>
                )}
              </form>
            </>
          )}
        </>
      )}
    </main>
  );
});

export default ShoppingCartContent;

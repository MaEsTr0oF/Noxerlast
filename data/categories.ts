import { dataStore } from "@/store/DataStore";
import { useState, useEffect } from "react";

/**
 * Получает актуальные данные категорий из API через DataStore
 * @returns Данные категорий и связанная информация
 */
export function getApiData() {
  // Формируем структуру данных, используя данные из DataStore
  // Если данные еще не загружены, возвращаем пустые массивы и объекты
  const apiData = {
    categories: dataStore.data?.categories || [],
    overall_product_tags_by_category:
      dataStore.data?.overall_product_tags_by_category || {},
    product_marks: dataStore.data?.product_marks || [],
  };

  return apiData;
}

// Экспортируем категории через геттер
export const categories = getApiData().categories;

// Экспортируем весь объект apiData для совместимости
export const apiData = getApiData();

// React-хук для получения актуальных категорий в компонентах
export function useCategories() {
  const [categories, setCategories] = useState(getApiData().categories);

  useEffect(() => {
    // Начальная установка категорий
    setCategories(getApiData().categories);

    // Функция обновления категорий при изменении данных
    const updateCategories = () => {
      setCategories(getApiData().categories);
    };

    // Регистрируем функцию в качестве обработчика обновления данных
    window.addEventListener("storeDataUpdated", updateCategories);

    // Очистка при размонтировании компонента
    return () => {
      window.removeEventListener("storeDataUpdated", updateCategories);
    };
  }, []);

  return categories;
}

// React-хук для получения полных данных API
export function useApiData() {
  const [data, setData] = useState(getApiData());

  useEffect(() => {
    // Начальная установка данных
    setData(getApiData());

    // Функция обновления данных
    const updateData = () => {
      setData(getApiData());
    };

    // Регистрируем функцию в качестве обработчика обновления данных
    window.addEventListener("storeDataUpdated", updateData);

    // Очистка при размонтировании компонента
    return () => {
      window.removeEventListener("storeDataUpdated", updateData);
    };
  }, []);

  return data;
}

import { makeAutoObservable, runInAction } from "mobx";

import { apiInstance } from "@/utils/api";
import { makePersistable } from "mobx-persist-store";

export class DataStore {
  data: any = {};
  error: string | null = null;
  lastUpdated: number = 0;
  refreshInterval: number | null = null;

  constructor() {
    makeAutoObservable(this);

    if (typeof window !== "undefined") {
      makePersistable(this, {
        name: "DataStore",
        properties: ["data", "lastUpdated"],
        storage: window.localStorage,
      });

      // Первоначальная загрузка данных
      this.fetchProducts();

      // Настройка периодического обновления данных (каждые 5 минут)
      this.setupAutoRefresh(5 * 60 * 1000);
    }
  }

  /**
   * Устанавливает интервал для автоматического обновления данных
   * @param interval Интервал в миллисекундах
   */
  setupAutoRefresh(interval: number) {
    // Очищаем предыдущий интервал, если есть
    if (this.refreshInterval) {
      clearInterval(this.refreshInterval);
    }

    // Устанавливаем новый интервал
    this.refreshInterval = window.setInterval(() => {
      this.fetchProducts();
    }, interval);
  }

  /**
   * Принудительно обновляет данные из API
   */
  async refreshData() {
    return this.fetchProducts();
  }

  /**
   * Загружает данные из API
   */
  async fetchProducts() {
    this.error = null;

    try {
      const response = await apiInstance.get("/products");

      runInAction(() => {
        this.data = response.data;
        this.lastUpdated = Date.now();

        // Генерируем событие обновления данных для компонентов
        if (typeof window !== "undefined") {
          window.dispatchEvent(new Event("storeDataUpdated"));
        }
      });

      return true;
    } catch (error) {
      runInAction(() => {
        this.error =
          error instanceof Error ? error.message : "Неизвестная ошибка";
      });
      return false;
    }
  }
}

export const dataStore = new DataStore();

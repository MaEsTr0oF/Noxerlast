import { makeAutoObservable, runInAction } from "mobx";
import { makePersistable } from "mobx-persist-store";
import { dataStore } from "@/store/DataStore";

interface CartItem {
  Product_ID: number;
  [key: string]: any;
  quantity: number;
  parameters?: any;
  selectedColor?: {
    id: number;
    name: string;
    code: string;
    image: string | null;
    discount: number | null;
  } | null;
}

export class ShoppingCartStore {
  items: CartItem[] = [];

  constructor() {
    makeAutoObservable(this);

    if (typeof window !== "undefined") {
      makePersistable(this, {
        name: "ShoppingCartStore",
        properties: ["items"],
        storage: window.localStorage,
      });
    }
  }

  addToCart(id: number, cartData: any) {
    const isObject = typeof cartData === "object" && cartData !== null;
    const paramTitle = isObject ? cartData.paramTitle : cartData;
    const colorId = isObject ? cartData.colorId : null;
    const colorImage = isObject ? cartData.colorImage : null;

    console.log("Добавление в корзину:", {
      id,
      paramTitle,
      colorId,
      colorImage,
    });

    // Проверяем, есть ли уже такой товар в корзине
    const existingItem = this.items.find((item) => {
      const paramMatch =
        item.Product_ID === id &&
        (!paramTitle || item.parameters?.parameter_string === paramTitle);
      const colorMatch = !colorId || item.selectedColor?.id === colorId;

      console.log(`Проверка существующего товара: ${item.Product_ID}`, {
        paramMatch,
        colorMatch,
        existingColorId: item.selectedColor?.id,
        newColorId: colorId,
      });

      return paramMatch && colorMatch;
    });

    if (existingItem) {
      console.log("Товар уже в корзине, увеличиваем количество");
      this.increaseQuantity(existingItem.Product_ID, paramTitle, colorId);
      return;
    }

    if (!dataStore.data || !dataStore.data.products) {
      console.error("Данные о продуктах не загружены из dataStore.");
      return;
    }

    const baseProduct = dataStore.data.products.find(
      (product: any) => product.Product_ID === id
    );

    if (!baseProduct) {
      console.error(`Продукт с ID ${id} не найден в dataStore.`);
      return;
    }

    // Находим выбранный параметр
    let selectedParameter = null;
    if (
      paramTitle &&
      baseProduct.parameters &&
      Array.isArray(baseProduct.parameters)
    ) {
      selectedParameter = baseProduct.parameters.find(
        (param: any) => param.parameter_string === paramTitle
      );

      if (!selectedParameter && baseProduct.parameters.length > 0) {
        selectedParameter = baseProduct.parameters[0];
      }
    }

    // Находим выбранный цвет
    let selectedColor = null;
    if (colorId && baseProduct.colors && Array.isArray(baseProduct.colors)) {
      selectedColor = baseProduct.colors.find(
        (color: any) => color.Color_ID === colorId
      );

      // Если не нашли цвет в списке цветов товара, но у нас есть ID и данные о цвете из карточки товара
      if (!selectedColor && isObject && cartData.colorName) {
        selectedColor = {
          Color_ID: colorId,
          Color_Name: cartData.colorName,
          Color_Code: cartData.colorCode || "",
          Color_image: colorImage,
          Product_ID: id,
          discount: cartData.discount || 0,
        };
      }
    }

    // Вычисляем итоговую цену с учетом скидки
    let finalPrice = selectedParameter?.price || baseProduct.Price || 0;

    // Применяем скидку на цвет (абсолютное значение)
    if (selectedColor && selectedColor.discount) {
      finalPrice = Math.max(0, finalPrice - selectedColor.discount);
    }

    const productToAdd = {
      ...baseProduct,
      parameters: selectedParameter,
      selectedColor: selectedColor
        ? {
            id: selectedColor.Color_ID,
            name: selectedColor.Color_Name,
            code: selectedColor.Color_Code,
            image: selectedColor.Color_image || colorImage,
            discount: selectedColor.discount,
          }
        : null,
      final_price: finalPrice,
      quantity: 1,
    };

    console.log("Добавлен новый товар в корзину:", productToAdd);

    runInAction(() => {
      this.items = [...this.items, productToAdd];
    });
  }

  removeFromCart(
    productId: number,
    parameterString?: string,
    colorId?: number
  ) {
    runInAction(() => {
      this.items = this.items.filter((item) => {
        const paramMatch = !(
          item.Product_ID === productId &&
          (!parameterString ||
            item.parameters?.parameter_string === parameterString)
        );
        const colorMatch = !colorId || item.selectedColor?.id !== colorId;
        return paramMatch || colorMatch;
      });
    });
  }

  clearCart() {
    console.log("Очистка корзины");
    runInAction(() => {
      this.items = [];
    });

    // Очищаем также элементы из localStorage, связанные с корзиной
    if (typeof window !== "undefined") {
      localStorage.removeItem("addedSettingItems");
      console.log("Локальное хранилище очищено");
    }
  }

  increaseQuantity(
    productId: number,
    parameterString?: string,
    colorId?: number
  ) {
    const updatedItems = [...this.items];

    const itemIndex = updatedItems.findIndex((item) => {
      const paramMatch =
        item.Product_ID === productId &&
        (!parameterString ||
          item.parameters?.parameter_string === parameterString);
      const colorMatch = !colorId || item.selectedColor?.id === colorId;
      return paramMatch && colorMatch;
    });

    if (itemIndex !== -1) {
      updatedItems[itemIndex] = {
        ...updatedItems[itemIndex],
        quantity: (updatedItems[itemIndex].quantity || 1) + 1,
      };

      runInAction(() => {
        this.items = updatedItems;
      });
    }
  }

  decreaseQuantity(
    productId: number,
    parameterString?: string,
    colorId?: number
  ) {
    const updatedItems = [...this.items];

    const itemIndex = updatedItems.findIndex((item) => {
      const paramMatch =
        item.Product_ID === productId &&
        (!parameterString ||
          item.parameters?.parameter_string === parameterString);
      const colorMatch = !colorId || item.selectedColor?.id === colorId;
      return paramMatch && colorMatch;
    });

    if (itemIndex !== -1 && updatedItems[itemIndex].quantity > 1) {
      updatedItems[itemIndex] = {
        ...updatedItems[itemIndex],
        quantity: updatedItems[itemIndex].quantity - 1,
      };

      runInAction(() => {
        this.items = updatedItems;
      });
    }
  }
}

export const shoppingCartStore = new ShoppingCartStore();

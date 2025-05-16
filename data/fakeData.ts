export interface ProjectDataType {
  categories: {
    Category_ID: number;
    Category_Image: string;
    Category_Name: string;
  }[];
  product_marks: {
    Mark_ID: number;
    Mark_Name: string;
  }[];
  overall_product_tags_by_category: {
    [key: string]: {
      [key: string]: number;
    };
  };
  products: {
    Created_At: string;
    OnMain: boolean;
    Product_ID: number;
    Product_Name: string;
    Updated_At: string | null;
    categories: {
      Category_ID: number;
      Category_Image: string;
      Category_Name: string;
    }[];
    colors: {
      Color_ID: number;
      Color_Name: string;
      Color_Code: string;
      Color_image: string | null;
      Product_ID: number;
      discount: number | null;
    }[];
    extras: {
      Characteristics: string;
      Delivery: string;
      Kit: string;
      Offer: string;
      Product_Extra_ID: number;
      Product_ID: number;
    }[];
    images: {
      Image_ID: number;
      Image_URL: string;
      MainImage: boolean | null;
      Product_ID: number;
    }[];
    importance_num: number | null;
    marks: {
      Mark_ID: number;
      Mark_Name: string;
    }[];
    parameters: {
      Parameter_ID: number;
      chosen: boolean;
      disabled: boolean;
      extra_field_color: string | null;
      extra_field_image: string | null;
      name: string;
      old_price: number | null;
      parameter_string: string;
      price: number;
    }[];
    reviews?: {
      Photo_ID: number;
      Photo_URL: string;
      Product_ID: number;
    }[];
    reviews_video?: {
      Poster_URL: string;
      Product_ID: number;
      Video_ID: number;
      Video_URL: string;
    }[];
  }[];
  special_project_parameters?: {
    [key: string]: string | null;
  };
  special_project_parameters_actions?: {
    id: number;
    action_type: string;
    description: string | null;
    extra_field_1: string | null;
    extra_field_2: string | null;
    image_url: string;
  }[];
  special_project_parameters_badges?: {
    id: number;
    description: string | null;
    image_url: string;
    url: string;
  }[];
  status?: string;
}

function validateProduct(product: any): any {
  if (!product || typeof product !== "object") {
    console.error("Невалидные данные продукта:", product);
    return null;
  }

  if (!product.Product_ID || typeof product.Product_ID !== "number") {
    console.error("Продукт без валидного ID:", product);
    return null;
  }

  return {
    ...product,
    Product_Name: product.Product_Name || "Неизвестный товар",
    images: Array.isArray(product.images) ? product.images : [],
    categories: Array.isArray(product.categories) ? product.categories : [],
    marks: Array.isArray(product.marks) ? product.marks : [],
    parameters: Array.isArray(product.parameters) ? product.parameters : [],
    colors: Array.isArray(product.colors)
      ? product.colors.map((color: any) => ({
          Color_ID: color?.Color_ID || 0,
          Color_Name: color?.Color_Name || "",
          Color_Code: color?.Color_Code || "",
          Color_image: color?.Color_image || null,
          Product_ID: color?.Product_ID || product.Product_ID || 0,
          discount: color?.discount || null,
        }))
      : [],
    extras: Array.isArray(product.extras) ? product.extras : [],
    reviews: Array.isArray(product.reviews) ? product.reviews : [],
    reviews_video: Array.isArray(product.reviews_video)
      ? product.reviews_video
      : [],
  };
}

function validateProjectData(data: any): ProjectDataType {
  if (!data || typeof data !== "object") {
    console.error("Невалидные данные проекта:", data);
    return {
      categories: [],
      product_marks: [],
      overall_product_tags_by_category: {},
      products: [],
    };
  }

  // Заменяем все URL адреса в special_project_parameters
  const origin = typeof window !== "undefined" ? window.location.origin : "";

  if (data.special_project_parameters) {
    for (const key in data.special_project_parameters) {
      if (typeof data.special_project_parameters[key] === "string") {
        data.special_project_parameters[key] = data.special_project_parameters[
          key
        ].replace(/https:\/\/noxer-ai\.ru/g, origin);
      }
    }
  }

  const validatedProducts = Array.isArray(data.products)
    ? data.products.map(validateProduct).filter(Boolean)
    : [];

  return {
    categories: Array.isArray(data.categories) ? data.categories : [],
    product_marks: Array.isArray(data.product_marks) ? data.product_marks : [],
    overall_product_tags_by_category:
      data.overall_product_tags_by_category || {},
    products: validatedProducts,
    special_project_parameters: data.special_project_parameters || {},
    special_project_parameters_actions: Array.isArray(
      data.special_project_parameters_actions
    )
      ? data.special_project_parameters_actions
      : [],
    special_project_parameters_badges: Array.isArray(
      data.special_project_parameters_badges
    )
      ? data.special_project_parameters_badges
      : [],
    status: data.status || "",
  };
}

export async function fetchProductsData() {
  try {
    // Определяем базовый URL динамически
    const baseUrl = typeof window !== "undefined" ? window.location.origin : "";

    // Формируем полный URL для API запроса
    const apiUrl = `${baseUrl}/api/products`;

    const response = await fetch(apiUrl);
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const data = await response.json();
    return validateProjectData(data);
  } catch (error) {
    console.error("Ошибка при получении данных:", error);
    return {
      categories: [],
      product_marks: [],
      overall_product_tags_by_category: {},
      products: [],
    };
  }
}

let cachedData: ProjectDataType | null = null;
let cacheTimestamp = 0;
const CACHE_LIFETIME = 5 * 60 * 1000;

export async function getProjectData(): Promise<ProjectDataType> {
  const now = Date.now();

  if (cachedData && now - cacheTimestamp < CACHE_LIFETIME) {
    return cachedData;
  }

  try {
    const freshData = await fetchProductsData();
    cachedData = freshData;
    cacheTimestamp = now;
    return freshData;
  } catch (error) {
    console.error("Ошибка при получении и кэшировании данных:", error);

    if (cachedData) {
      console.warn("Возвращаем устаревшие данные из кэша");
      return cachedData;
    }

    return {
      categories: [],
      product_marks: [],
      overall_product_tags_by_category: {},
      products: [],
    };
  }
}

export const projectData: Partial<ProjectDataType> = {
  categories: [],
  product_marks: [],
  overall_product_tags_by_category: {},
  products: [],
};

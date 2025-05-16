export interface ProductType {
  id: number;
  tag: string;
  isFavorite: boolean;
  images: string[];
  initialPrice: string;
  price: string | number;
  title: string;
  isActive: boolean;
  categoryId: number;
  description?: string;
  features?: string;
  settings?: any[];
  reviewImages?: string[];
  video?: string;
}

import { Product } from "./Product";

export interface ProductResponse {
  products: Product[];
  total: number;
}
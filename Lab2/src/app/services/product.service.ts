
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

// This defines what a product looks like
export interface Product {
  id: number;
  title: string;
  price: number;
  category: string;
  description: string;
  rating: number;
  thumbnail: string;
}

// This defines the API response structure
export interface ProductResponse {
  products: Product[];
  total: number;
}

// Define what a category object looks like
export interface Category {
  slug: string;
  name: string;
  url: string;
}

@Injectable({
  providedIn: 'root' // This makes the service available throughout the app
})
export class ProductService {
  
  // The API URLs we'll use
  private apiUrl = 'https://dummyjson.com/products';
  private categoriesUrl = 'https://dummyjson.com/products/categories';

  // HttpClient helps us make HTTP requests (like fetch in JavaScript)
  constructor(private http: HttpClient) { }

  // Method to get all products
  getProducts(): Observable<ProductResponse> {
    return this.http.get<ProductResponse>(this.apiUrl);
  }

  // Method to get all categories
  getCategories(): Observable<Category[]> {
    return this.http.get<Category[]>(this.categoriesUrl);
  }
}
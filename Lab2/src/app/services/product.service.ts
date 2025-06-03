import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from '../model/Product';
import { Category } from '../model/Category';
import { ProductResponse } from '../model/ProductResponse';




@Injectable({
  providedIn: 'root' // This makes the service available throughout the app
})
export class ProductService {
  
  private apiUrl = 'https://dummyjson.com/products';
  private categoriesUrl = 'https://dummyjson.com/products/categories';

  // HttpClient helps us make HTTP requests (like fetch in JavaScript)
  constructor(private http: HttpClient) { }

  getProducts(): Observable<ProductResponse> {
    return this.http.get<ProductResponse>(this.apiUrl);
  }

  getCategories(): Observable<Category[]> {
    return this.http.get<Category[]>(this.categoriesUrl);
  }
}

export {
  Product 
  , Category
};

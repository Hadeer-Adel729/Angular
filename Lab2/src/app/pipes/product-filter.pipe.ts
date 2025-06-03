
import { Pipe, PipeTransform } from '@angular/core';
import { Product } from '../services/product.service';

@Pipe({
  name: 'productFilter',
  standalone: true
})
export class ProductFilterPipe implements PipeTransform {

  transform(
    products: Product[], 
    titleFilter: string, 
    priceFilter: number | null, 
    categoryFilter: string
  ): Product[] {
    
    if (!products) {
      return [];
    }

    return products.filter(product => {
      // Check title filter (case-insensitive)
      const titleMatch = !titleFilter || 
        product.title.toLowerCase().includes(titleFilter.toLowerCase());
      
      // Check price filter (less than or equal to)
      const priceMatch = !priceFilter || product.price <= priceFilter;
      
      // Check category filter (exact match)
      const categoryMatch = !categoryFilter || product.category === categoryFilter;
      
      // Product must match ALL filters
      return titleMatch && priceMatch && categoryMatch;
    });
  }
}
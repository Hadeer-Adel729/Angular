import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ProductService, Product, Category } from '../../services/product.service';
import { ProductFilterPipe } from '../../pipes/product-filter.pipe';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule, FormsModule, ProductFilterPipe],
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})

export class ProductsComponent implements OnInit {
  
  products: Product[] = []; 
  categories: Category[] = []; 
  isLoading: boolean = true; 

  titleFilter: string = '';
  priceFilter: number | null = null;
  categoryFilter: string = '';

  // Inject the ProductService
  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.loadProducts();
    this.loadCategories();
  }

  loadProducts(): void {
    this.isLoading = true;
    
    this.productService.getProducts().subscribe({
      next: (response) => {
        // Success: we got the data
        this.products = response.products;
        this.isLoading = false;
      },
      error: (error) => {
        // Error: something went wrong
        console.error('Error loading products:', error);
        this.isLoading = false;
      }
    });
  }

  loadCategories(): void {
    this.productService.getCategories().subscribe({
      next: (categories) => {
        this.categories = categories;
      },
      error: (error) => {
        console.error('Error loading categories:', error);
      }
    });
  }

  resetFilters(): void {
    this.titleFilter = '';
    this.priceFilter = null;
    this.categoryFilter = '';
  }
}
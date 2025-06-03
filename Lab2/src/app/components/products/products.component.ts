
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
  
  // Variables to store our data
  products: Product[] = []; // Array to hold all products
  categories: Category[] = []; // Array to hold all categories
  isLoading: boolean = true; // To show loading state
  
  // Filter form variables
  titleFilter: string = '';
  priceFilter: number | null = null;
  categoryFilter: string = '';

  // Inject the ProductService
  constructor(private productService: ProductService) { }

  // This runs when the component is initialized
  ngOnInit(): void {
    this.loadProducts();
    this.loadCategories();
  }

  // Method to load products from the API
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

  // Method to load categories from the API
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

  // Method to reset all filters
  resetFilters(): void {
    this.titleFilter = '';
    this.priceFilter = null;
    this.categoryFilter = '';
  }
}
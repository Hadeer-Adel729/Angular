import { Component } from '@angular/core';

@Component({
  selector: 'app-products',
  standalone: false,
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent {
  products = [
  {
    id: 1,
    title: 'Machine1',
    category: 'Machines',
    price: 150,
    stock: 12,
    image: 'machines/product121.jpg'
  },
  {
    id: 2,
    title: 'Chanel No. 5',
    category: 'Mugs',
    price: 200,
    stock: 8,
    image: 'machines/product354.jpg'
  },
  {
    id: 3,
    title: 'Creed Aventus',
    category: 'Beans',
    price: 250,
    stock: 5,
    image: 'machines/product35.jpg'
  },
  {
    id: 4,
    title: 'YSL Libre',
    category: 'Machines',
    price: 180,
    stock: 15,
    image: 'machines/product523.jpg'
  },
 
];


  // Form filter values
  selectedCategory = 'All';
  titleSearch = '';
  maxPrice: number | null = null;
}

import { TestBed } from '@angular/core/testing';

import { Product } from './product.service';
import { ProductsComponent } from '../components/products/products.component';

describe('Product', () => {
  let service: ProductsComponent;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProductsComponent);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

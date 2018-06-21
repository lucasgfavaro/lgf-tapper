import { Component, Output, EventEmitter, OnInit } from '@angular/core';
import { Product } from '../../domain/product'
import { ProductService } from '../../services/product.service';


@Component({
  selector: 'app-product-selector',
  templateUrl: './product-selector.component.html',
  styleUrls: ['./product-selector.component.css']
})
export class ProductSelectorComponent implements OnInit {

  products: Product[];
  selectedProduct: Product;
  @Output() productSelected = new EventEmitter<Product>();

  constructor(private productService: ProductService) { }

  ngOnInit(){
    this.getProducts();
  }

  getProducts(): void {
    this.productService.getProducts()
        .subscribe(products => this.products = products);
  }

  onSelect(product: Product): void {
    this.selectedProduct = product;
    this.productSelected.emit(this.selectedProduct);
  }
}

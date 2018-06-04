import { Component, OnInit } from '@angular/core';
import { Product } from '../../domain/product'

@Component({
  selector: 'app-product-selector',
  templateUrl: './product-selector.component.html',
  styleUrls: ['./product-selector.component.css']
})
export class ProductSelectorComponent implements OnInit {

  product: Product = {
    id: 1,
    name: 'Coca Cola'
  }

  constructor() { }

  ngOnInit() {


  }

}

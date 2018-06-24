import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Product } from '../domain/product';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private productsUrl = 'http://localhost:8080/api/products';

  constructor(private http: HttpClient,
  private messageService: MessageService) { }

  getProducts(): Observable<Product[]> {
    this.messageService.add('ProductService: fetched products');
    return this.http.get<Product[]>(this.productsUrl)
  }
}

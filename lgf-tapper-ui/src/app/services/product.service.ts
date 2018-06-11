import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Product } from '../domain/product';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { MessageService } from './message.service';


export const PRODUCTS: Product[] = [
  { id: 11, name: 'Mr. Nice' },
  { id: 12, name: 'Narco' },
  { id: 13, name: 'Bombasto' },
  { id: 14, name: 'Celeritas' },
  { id: 15, name: 'Magneta' },
  { id: 16, name: 'RubberMan' },
  { id: 17, name: 'Dynama' },
  { id: 18, name: 'Dr IQ' },
  { id: 19, name: 'Magma' },
  { id: 20, name: 'Tornado' }
];

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
    //return of(PRODUCTS);
  }
}

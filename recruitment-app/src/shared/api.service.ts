import { Injectable } from '@angular/core';
import { RestService } from './rest.service';
import { Observable } from 'rxjs';
import { Product } from './api';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private rest:RestService, private http: HttpClient) { }

  public getProducts(): Observable<Product[]> {
   
    return this.rest.get<Product[]>('http://localhost:3000/element');
}

public getProduct(id:number): Observable<Product> {
   
  return this.rest.get<Product>('http://localhost:3000/element/'+ id);
}

}

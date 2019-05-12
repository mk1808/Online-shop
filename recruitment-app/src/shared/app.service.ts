import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Product } from './api';

@Injectable({
  providedIn: 'root'
})
export class AppService {
  private eventSource=new Subject<Product>();
  public eventEmitter=this.eventSource.asObservable();
  private products:Product[]=[];
  constructor() { }


  getProducts():Product[]{
    console.log(this.products)
    return this.products;
  }

  addItemToCart(product:Product){
    this.eventSource.next();
    this.products.push(product);
    console.log(this.products);
  }

  displayDetails(item){
    //this.eventSource.next();
  }

  openProductDetails(product){
    //this.eventSource.next();
  }




}

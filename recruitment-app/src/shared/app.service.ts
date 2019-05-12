import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Product } from './api';
import { strictEqual } from 'assert';

@Injectable({
  providedIn: 'root'
})
export class AppService {
  private eventSource=new Subject<Product>();
  public eventEmitter=this.eventSource.asObservable();

  private eventSourceName=new Subject<string>();
  public eventEmitterName=this.eventSourceName.asObservable();
  
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

  sendSerchItem(name:string){
    this.eventSourceName.next(name);
  }

  displayDetails(item){
    //this.eventSource.next();
  }

  openProductDetails(product){
    //this.eventSource.next();
  }




}

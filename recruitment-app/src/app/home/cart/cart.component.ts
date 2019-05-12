import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AppService } from 'src/shared/app.service';
import { Product } from 'src/shared/api';
import { CookieService } from 'ngx-cookie-service';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
product:Product;
products:Product[]=[];
empty:boolean=false;
numberOfItems:number=0;


  constructor(private router: Router, private route: ActivatedRoute,public service: AppService,
    private cookie: CookieService) { }

  ngOnInit() {
    this.products=this.service.getProducts();
    console.log(this.products)
    this.numberOfItems=this.products.length;
    //this.cookie.set("cart", JSON.stringify(this.products), null, "/");

//this.products=JSON.parse(this.cookie.get('cart'));
//this.cookie.set("cart", JSON.stringify(this.products), null, "/");
    if(this.products.length==0){this.empty=true;}
    this.service.eventEmitter.subscribe(x=>{
      //this.products.push(x);
      this.empty=false;
      this.numberOfItems++;
  //    this.cookie.set("cart", JSON.stringify(this.products), null, "/");
   //   console.log(x);
    });

    


  }

}

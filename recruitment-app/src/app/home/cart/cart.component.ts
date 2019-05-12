import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AppService } from 'src/shared/app.service';
import { Product } from 'src/shared/api';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
product:Product;
products:Product[]=[];
empty:boolean;
numberOfItems:number=0;


  constructor(private router: Router, private route: ActivatedRoute,public service: AppService) { }

  ngOnInit() {
    if(this.products.length==0){this.empty=true;}
    this.service.eventEmitter.subscribe(x=>{
      this.products.push(x);
      this.empty=false;
      this.numberOfItems++;
      console.log(x);
    });

    


  }

}

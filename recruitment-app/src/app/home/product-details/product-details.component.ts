import { Component, OnInit } from '@angular/core';
import { AppService } from 'src/shared/app.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Product } from 'src/shared/api';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {
product:Product=new Product();
  constructor(private router: Router, private route: ActivatedRoute, public service: AppService) { }

  ngOnInit() {
    this.product.id=1;
    this.product.price=2;
    this.product.name="pord1";
    this.product.longDesc="llllllllllllld";
    this.product.shortDesc="sd";
    this.route.params.subscribe(x =>{
      
      // x.id getprodbyid
    }
    );

  }

addItem(){
  this.service.addItemToCart(this.product);

}
}

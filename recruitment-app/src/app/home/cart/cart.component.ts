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
  product: Product;
  products: Product[] = [];
  empty: boolean = false;
  numberOfItems: number = 0;


  constructor(private router: Router, private route: ActivatedRoute, public service: AppService,
    private cookie: CookieService) { }

  ngOnInit() {
    this.products = this.service.getProducts();
    this.numberOfItems = this.products.length;

    if (this.products.length == 0) { this.empty = true; }
    this.service.eventEmitter.subscribe(x => {

      this.empty = false;
      this.numberOfItems++;
    });

  }

}

import { Component, OnInit } from '@angular/core';
import { AppService } from 'src/shared/app.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Product } from 'src/shared/api';
import { ApiService } from 'src/shared/api.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {
  product: Product = new Product();
  id: number;
  active: boolean = true;
  products: Product[] = [];
  constructor(private router: Router, private route: ActivatedRoute, public service: AppService,
    public api: ApiService) { }

  ngOnInit() {

    this.route.params.subscribe(x => {
      this.id = x.id;
      this.api.getProduct(this.id).subscribe(y => {
        this.product = y;


        this.active = !this.service.findElementInCart(this.product);
      })

    }
    );

  }

  addItem() {
    if (this.active) this.service.addItemToCart(this.product);

    this.active = false;
  }
}

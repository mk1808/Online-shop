import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AppService } from 'src/shared/app.service';
import { ApiService } from 'src/shared/api.service';
import { Product } from 'src/shared/api';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  manyItems: boolean = true;
  id = 1;
  items: Product[] = [];
  allItems: Product[] = [];
  serchText: string;
  constructor(private router: Router, private route: ActivatedRoute, public service: AppService,
    public apiService: ApiService, private spinner: NgxSpinnerService) { }

  ngOnInit() {

    this.spinner.show();

    setTimeout(() => {

      this.spinner.hide();
    }, 2000);

    this.apiService.getProducts().subscribe(x => {
      this.allItems = x;
      this.items = x;
    });

    this.service.eventEmitterName.subscribe(x => {
      this.serchText = x;
      this.items = this._filterItems(this.serchText);

    });

  }


  private _filterItems(value: any): Product[] {
    if (!(value instanceof Object)) {
      const filterValue = value.toLowerCase();

      return this.allItems.filter(
        item => item.name.toLowerCase().indexOf(filterValue) >= 0
      );
    }
    return this.items;
  }


}

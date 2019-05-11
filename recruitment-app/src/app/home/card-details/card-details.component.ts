import { Component, OnInit } from '@angular/core';
import { AppService } from 'src/shared/app.service';

@Component({
  selector: 'app-card-details',
  templateUrl: './card-details.component.html',
  styleUrls: ['./card-details.component.scss']
})
export class CardDetailsComponent implements OnInit {

  constructor( public service: AppService) { }

  ngOnInit() {
  }

addItem(){
  this.service.addItemToCard();

}
}

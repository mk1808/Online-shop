import { Component, OnInit, Input } from '@angular/core';
import { AppService } from 'src/shared/app.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent implements OnInit {
  @Input() id;
  constructor(public service:AppService,private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    
 //   console.log(this.id);

  }

  onItem(){
    //this.service.displayDetails(item);

    this.router.navigate(['/home/'+this.id.id], { relativeTo: this.route });
    
    
  }
}

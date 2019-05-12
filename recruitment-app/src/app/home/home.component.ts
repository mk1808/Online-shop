import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AppService } from 'src/shared/app.service';
import { ApiService } from 'src/shared/api.service';
import { Product } from 'src/shared/api';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
manyItems:boolean=true;
id=1;
items:Product[]=[];
  constructor(private router: Router, private route: ActivatedRoute,public service: AppService,
    public apiService:ApiService) { }

  ngOnInit() {
    this.apiService.getProducts().subscribe(x=>{
      console.log(x);
      this.items=x;
    })
   
  }
  onItem(item){
    this.service.displayDetails(item);

    //this.router.navigate(['/home/'+this.id], { relativeTo: this.route });
    
    
  }

}

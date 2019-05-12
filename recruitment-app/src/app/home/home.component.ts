import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AppService } from 'src/shared/app.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
manyItems:boolean=true;
id=1;
items:any[]=[1,2,3,4,5];
  constructor(private router: Router, private route: ActivatedRoute,public service: AppService) { }

  ngOnInit() {
    
   
  }
  onItem(item){
    this.service.displayDetails(item);

    //this.router.navigate(['/home/'+this.id], { relativeTo: this.route });
    
    
  }

}

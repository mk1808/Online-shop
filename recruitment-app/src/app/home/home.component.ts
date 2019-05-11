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
items:string[]=['a','b','c','d','e'];
  constructor(private router: Router, private route: ActivatedRoute,public service: AppService) { }

  ngOnInit() {
    this.route.params.subscribe(x => {
     if(x.id==null){
      this.manyItems=true;
     }
     else {
       this.id=x.id;
       this.manyItems=false;
     }
    });
    this.service.eventEmitter.subscribe(x=>{
      console.log('dcfghj');
    })
  }
  onItem(){
    this.router.navigate(['/home/'+this.id], { relativeTo: this.route });
    
    
  }

}

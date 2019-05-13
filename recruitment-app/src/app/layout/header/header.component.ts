import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { AppService } from 'src/shared/app.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  searchInput: boolean = false;
  searchText = new FormControl('');
  constructor(public service: AppService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {


  }

  searchProduct() {
    if (window.innerWidth > 800)
      this.searchInput = !this.searchInput;
  }

  onSearch() {
    this.service.sendSerchItem(this.searchText.value);
  }

  onLogo() {
    this.router.navigate(['/home']);
  }
}

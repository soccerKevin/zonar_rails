import { Component, OnInit } from '@angular/core';
// import { HttpClientModule } from '@angular/common/http';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})

export class ProductsComponent implements OnInit {
  products: Array<Object>;

  constructor(public apiService: ApiService , public router : Router) {}

  open(){
  }

  ngOnInit() {
    this.apiService.get("products").subscribe((data : any)=>{
      this.products = data;
    });
  }
}

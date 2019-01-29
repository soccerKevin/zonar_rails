import { Component, OnInit } from '@angular/core';
// import { HttpClientModule } from '@angular/common/http';
import { HttpClient, HttpHeaders } from '@angular/common/http';
const httpOptions = {
  'headers': new HttpHeaders({ 'Access-Control-Allow-Origin':'*' }),
  'Content-Type': 'application/json'
};

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  products: any;

  constructor(public http: HttpClient) {}

  ngOnInit() {
    this.http.get('localhost:3000/products', httpOptions )
      // .subscribe(response => this.products = response.json())
      .subscribe(response => console.log(response))
  }

}

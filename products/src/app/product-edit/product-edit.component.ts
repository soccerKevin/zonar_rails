import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.scss']
})
export class ProductEditComponent implements OnInit {
  data: any;
  constructor(public apiService: ApiService , public router : Router, private route: ActivatedRoute){}

  save(){
    this.apiService.update("products/" + this.data.id, {product: this.data} ).subscribe((data : any)=>{
      console.log("saved");
    });
  }

  ngOnInit() {
    const paramsId = this.route.snapshot.paramMap.get('id');
    this.apiService.get("products/" + paramsId ).subscribe((data : any)=>{
      this.data = data
    });
  }

}

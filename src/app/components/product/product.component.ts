import { ProductResponseModel } from './../../models/productResponseModel';
import { Product } from './../../models/product';
import { Component, OnInit } from '@angular/core';
import{HttpClient} from "@angular/common/http"
import { threadId } from 'worker_threads';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
 
  products:Product[] = [];
  apiUrl ="http://localhost:44332/api/products/getall"

  
  constructor(private httpClient:HttpClient) { }

  ngOnInit(): void {
    this.getProducts()

  }
  getProducts(){
   this.httpClient.get<ProductResponseModel>(this.apiUrl).subscribe((response)=> {
     this.products=response.data
   })
  }

}

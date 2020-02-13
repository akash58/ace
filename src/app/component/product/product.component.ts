import { Component, OnInit, Input } from '@angular/core';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  company: any;
  objectsFromStorage: any;
  @Input() productDetail = { productName: '', companyName: '', productCost: 0 };
  constructor() { }

  ngOnInit() {
    this.company = localStorage.getItem("companyDetail");
    this.objectsFromStorage = JSON.parse(this.company);
  }

  productData(data){
    let productDetails = [];
    productDetails = JSON.parse(localStorage.getItem('productDetail')) || [];
    productDetails.push(this.productDetail);
    localStorage.setItem('productDetail', JSON.stringify(productDetails));
  }
}

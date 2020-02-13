import { Component, OnInit, Input } from '@angular/core';
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { ModalComponent } from "../modal/modal.component";

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent implements OnInit {
  company: any;
  product: any;
  objectsFromCompanyStorage: any;
  objectsFromProductStorage: any;
  @Input() orderDetail = { companyName: '', productName: '', rate: 0, cost: 0, totalCost: 0 };
  
  constructor(private modalService: NgbModal) { }

  ngOnInit() {
    this.company = localStorage.getItem("companyDetail");
    this.objectsFromCompanyStorage = JSON.parse(this.company);
    this.product = localStorage.getItem("productDetail");
    this.objectsFromProductStorage = JSON.parse(this.product);
  }
  orderData(){
    let orderDetails = [];
    orderDetails = JSON.parse(localStorage.getItem('orderDetail')) || [];
    orderDetails.push(this.orderDetail);
    localStorage.setItem('orderDetail', JSON.stringify(orderDetails));
    let modalRef = this.modalService.open(ModalComponent);
    modalRef.componentInstance.data = this.orderDetail;
  }
  get sum(): number {
    return this.orderDetail.totalCost = this.orderDetail.rate * this.orderDetail.cost;
  }

}

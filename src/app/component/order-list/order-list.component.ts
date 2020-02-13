import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.scss']
})
export class OrderListComponent implements OnInit {
  order: any;
  objectsFromOrderDetailStorage: any;
  constructor() { }

  ngOnInit() {
    this.order = localStorage.getItem("orderDetail");
    this.objectsFromOrderDetailStorage = JSON.parse(this.order);
  }

}

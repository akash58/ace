import { Component, OnInit, Input } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.scss']
})
export class CompanyComponent implements OnInit {

  companyDetails = [];
  @Input() companyDetail = { companyName: '', companyGst: 0 };
  constructor(private router: Router,) { }

  ngOnInit() {
    let fromStorage = localStorage.getItem("orderDetails");
    let objectsFromStorage = JSON.parse(fromStorage)
  }

  companyData(data){
    let details = [];
    details = JSON.parse(localStorage.getItem('companyDetail')) || [];
    details.push(this.companyDetail);
    localStorage.setItem('companyDetail', JSON.stringify(details));  }

}

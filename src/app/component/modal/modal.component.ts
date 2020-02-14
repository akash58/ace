import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';
import { NgbActiveModal } from "@ng-bootstrap/ng-bootstrap";
import { Router } from "@angular/router";
// import {jsPDF} from 'jspdf';
import * as jsPDF from 'jspdf'

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {
  @Input() data = { companyName: '', productName: '', rate: 0, cost: 0 };
  @ViewChild('pdfTable', {static: false}) pdfTable: ElementRef;
  constructor(public activeModal: NgbActiveModal,private router: Router) { }

  ngOnInit() {
  }

  closeModal() {
    this.activeModal.close("Modal Closed");
    this.router.navigate(["/order-list"]);
  }

  public downloadAsPDF() {
    const doc = new jsPDF();

    const specialElementHandlers = {
      '#editor': function (element, renderer) {
        return true;
      }
    };

    const pdfTable = this.pdfTable.nativeElement;

    doc.fromHTML(pdfTable.innerHTML, 15, 15, {
      width: 400,
      'elementHandlers': specialElementHandlers
    });

    doc.save('PurchaseOrder.pdf');
  }

}

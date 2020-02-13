import { Component, OnInit, Input } from '@angular/core';
import { NgbActiveModal } from "@ng-bootstrap/ng-bootstrap";
import { Router } from "@angular/router";

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {
  @Input() data = { companyName: '', productName: '', rate: 0, cost: 0 };
  constructor(public activeModal: NgbActiveModal,private router: Router) { }

  ngOnInit() {
  }

  closeModal() {
    this.activeModal.close("Modal Closed");
    this.router.navigate(["/order-list"]);
  }

}

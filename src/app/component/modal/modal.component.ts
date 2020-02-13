import { Component, OnInit, Input } from '@angular/core';
import { NgbActiveModal } from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {
  @Input() data = { companyName: '', productName: '', rate: 0, cost: 0 };
  constructor(public activeModal: NgbActiveModal,) { }

  ngOnInit() {
  }

  closeModal() {
    this.activeModal.close("Modal Closed");
  }

}

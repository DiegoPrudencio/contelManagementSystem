import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AnnotationBill } from 'src/app/interfaces/annotationBill';

@Component({
  selector: 'app-caixa',
  templateUrl: './caixa.component.html',
  styleUrls: ['./caixa.component.css']
})
export class CaixaComponent implements OnInit {

  receiptReceived: number = 0;
  receiptNotReceived: number = 0;
  finalReceiptReceived: number = 0;

  paidCost: number = 0;
  unpaidCost: number = 0;
  finalPaid: number = 0;

  totalBalance: number = 0;

  constructor() { }



  ngOnInit(): void {
    
    this.receiptNotReceived = 50
    this.receiptReceived = 40
    this.finalReceiptReceived = this.receiptReceived + this.receiptNotReceived

    this.paidCost = 60
    this.unpaidCost = 80
    this.finalPaid = this.paidCost + this.unpaidCost

    this.totalBalance = this.finalReceiptReceived - this.finalPaid

  }








}

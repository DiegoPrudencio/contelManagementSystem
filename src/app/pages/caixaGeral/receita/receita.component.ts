import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AnnotationBill } from 'src/app/interfaces/annotationBill';

@Component({
  selector: 'app-receita',
  templateUrl: './receita.component.html',
  styleUrls: ['./receita.component.css']
})
export class ReceitaComponent implements OnInit {

  constructor(private router: Router) { }

  annotationBills: AnnotationBill[] = [];
  isAddition: string = "receita";
  isConcluded: string = "sim";
  receiptReceived: number = 0;
  receiptNotReceived: number = 0;

  ngOnInit(): void {

      this.annotationBills = [
        {
          id: 1,
          imageTypeUrl: 'receita',
          description: 'Quarto 01',
          category: 'Hospedagem',
          dueDate: 'september, 4, 2022',
          amount: 300.00,
          isConcluded: false
        },
        {
          id: 2,
          imageTypeUrl: 'receita',
          description: 'Quarto 02',
          category: 'Hospedagem',
          dueDate: 'september, 15, 2022',
          amount: 500.00,
          isConcluded: false
        }
      ]

  }


  backTo() {
    this.router.navigate(['caixaGeral/caixa']);
  }

  btnBack() {

  }

  btnNext() {

  }

  newTransaction() {

  }

  conclued() {

    if (this.isAddition) {
      this.receiptReceived = this.receiptReceived
      
    }
    
  }

}

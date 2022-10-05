import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AnnotationBill } from 'src/app/interfaces/annotationBill';

@Component({
  selector: 'app-despesa',
  templateUrl: './despesa.component.html',
  styleUrls: ['./despesa.component.css']
})
export class DespesaComponent implements OnInit {

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
          imageTypeUrl: 'despesa',
          description: 'Pagamento de funcionários',
          category: 'Salário',
          dueDate: 'september, 5, 2022',
          amount: 1500.00,
          isConcluded: false
        },
        {
          id: 2,
          imageTypeUrl: 'despesa',
          description: 'Conta de luz',
          category: 'Conta',
          dueDate: 'december, 4, 2022',
          amount: 150.00,
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

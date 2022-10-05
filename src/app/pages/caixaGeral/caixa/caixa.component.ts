import { Component, OnInit } from '@angular/core';

import { AnnotationBill } from 'src/app/interfaces/annotationBill';

@Component({
  selector: 'app-caixa',
  templateUrl: './caixa.component.html',
  styleUrls: ['./caixa.component.css']
})
export class CaixaComponent implements OnInit {
  router: any;

  constructor() { }

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
          imageTypeUrl: 'despesa',
          description: 'Conta de luz',
          category: 'Conta',
          dueDate: 'december, 4, 2022',
          amount: 150.00,
          isConcluded: false
        }
      ]

  }


receitas() {
  this.router.navigate(['/caixaGeral/despesas']);
}

despesas() {

}

newTransaction() {

}






}

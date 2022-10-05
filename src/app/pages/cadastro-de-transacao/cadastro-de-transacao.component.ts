import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';

import { AnnotationBill } from 'src/app/interfaces/annotationBill';

@Component({
  selector: 'app-cadastro-de-transacao',
  templateUrl: './cadastro-de-transacao.component.html',
  styleUrls: ['./cadastro-de-transacao.component.css']
})
export class CadastroDeTransacaoComponent implements OnInit {


  formulario: FormGroup;
  annotationBills: AnnotationBill[] = [];
  // newAnnotationBills = Array <{id: number;
  //   imageTypeUrl: string;
  //   description: string; 
  //   category: string; 
  //   dueDate: string; 
  //   amount: number; 
  //   imageFinalUrl: string}>();

  // newAnnotationBills = [ 
  //   { 
  //   id: number;
  //   imageTypeUrl: string;
  //   description: string; 
  //   category: string; 
  //   dueDate: string; 
  //   amount: number; 
  //   imageFinalUrl: string
  // }];

  id: number = 0;
  imageFirstType: string = "";
  description: string = "";
  category: string = "";
  dueDate: string = "";
  amount: number = 0;
  isConcluded: boolean = false;


  constructor(private formBuilder: FormBuilder, private router: Router) {
    this.formulario = this.formBuilder.group({
      amount: ['', [Validators.required]],
      imageFirstType: [''],
      description: ['', [Validators.required]],
      concluded: [''],
      category: ['', [Validators.required]],
      dueDate: ['', [Validators.required]],
      isConcluded: [''],

      // assunto: ['', [Validators.required, Validators.maxLength(50)]],
      // mensagem: ['', [Validators.required, Validators.maxLength(500)]],
    });
  }


  ngOnInit(): void {

  }

  cadastrar() {

    this.id = (this.id + 1);
    this.amount = this.formulario.get('amount')?.value;
    this.imageFirstType = this.formulario.get('imageFirstType')?.value;
    this.description = this.formulario.get('description')?.value;
    this.category = this.formulario.get('category')?.value;
    this.dueDate = this.formulario.get('dueDate')?.value;

    this.annotationBills.push({
      id: this.id,
      imageTypeUrl: this.imageFirstType,
      description: this.description,
      category: this.category,
      dueDate: this.dueDate,
      amount: this.amount,
      isConcluded: this.isConcluded,
    })

    console.log(this.annotationBills);
    
    this.formulario.reset();


  }

  backTo() {
    this.router.navigate(['caixaGeral/caixa']);
  }

  changeImageFirstType(e: any) {
    // console.log(e.target.value);
  }

  changeStatus(e: any) {
    if (e.target.checked) {
      this.isConcluded = true
    } else {
      this.isConcluded = false
    }

    // console.log(e.target.checked)
  }
}

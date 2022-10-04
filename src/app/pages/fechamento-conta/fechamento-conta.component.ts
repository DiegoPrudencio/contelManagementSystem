import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {ThemePalette} from '@angular/material/core';
import { Pagamento } from 'src/app/interfaces/pagamento';

@Component({
  selector: 'app-fechamento-conta',
  templateUrl: './fechamento-conta.component.html',
  styleUrls: ['./fechamento-conta.component.css']
})
export class FechamentoContaComponent implements OnInit {
  formularioFechamento: FormGroup;
  color: ThemePalette;

  novoPagamento!:Pagamento;

  constructor(private formBuilder: FormBuilder) {
    this.formularioFechamento =  this.formBuilder.group({
      pagamentoValor: ['',[Validators.required]],
      pagamentoStatus:['',[Validators.required]],
      pagamentoDescricao: ['',[Validators.required]],
      pagamentoCategoria: ['',[Validators.required]],
      pagamentoVencimento:['',[Validators.required]]
    });
   }

  ngOnInit(): void {
  }

  /**
   * Função responsável por cadastrar o pagamento 
   */
  cadastrarPagamento(){

    //Captura os dados do formulário e atribui a um novo objeto Pagamento
    this.novoPagamento={
      valor:this.formularioFechamento.get('pagamentoValor')?.value, 
      status: this.formularioFechamento.get('pagamentoStatus')?.value,
      descricao:this.formularioFechamento.get('pagamentoDescricao')?.value,
      categoria:this.formularioFechamento.get('pagamentoCategoria')?.value,
      dataVencimento:this.formularioFechamento.get('pagamentoVencimento')?.value,
    };
    
    //apenas para testar
    alert("pagamento ok");

    //CRIAR AQUI A FUNCIONALIDADE DO QUE INTERLIGA O FRONT-END COM O BACK-END, SALVO OS DADOS DO PAGAMENTO NO BANCO DE DADOS
    
  }
}

import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { UnidadeHoteleira } from 'src/app/interfaces/unidade-hoteleira2';


@Component({
  selector: 'app-cadastro-de-unidade-hoteleira',
  templateUrl: './cadastro-de-unidade-hoteleira.component.html',
  styleUrls: ['./cadastro-de-unidade-hoteleira.component.css']
})
export class CadastroDeUnidadeHoteleiraComponent implements OnInit {

  formularioCadastroUnidadeHoteleira!: FormGroup;
  unidadeHoteleiraCadastrada!:UnidadeHoteleira;
  startFormularioCadastroUnidadeHoteleira = {
    codigoUnidade: '',
    codigoDiaria: 0,
    quantidadeCamaCasal: 0,
    quantidadeCamaSolteiro: 0,
    porcentagemValorDiaria: 0,
    isAcrescimo: 'true',
  }
  
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.createFormUnidadeHoteleira();
  }

  createFormUnidadeHoteleira() {
    this.formularioCadastroUnidadeHoteleira = this.formBuilder.group({
      codigoUnidade: ['', [Validators.required, Validators.maxLength(9)]],
      codigoDiaria: [0, [Validators.min(1)]],
      quantidadeCamaCasal: [0, [Validators.required, Validators.min(0)]],
      quantidadeCamaSolteiro: [0, [Validators.required, Validators.min(0)]],
      porcentagemValorDiaria: [0, [Validators.required, Validators.min(0), Validators.max(100)]],
      isAcrescimo: ['true']
    });
  }

  cadastrarUnidadeHoteleira(): void {

    this.unidadeHoteleiraCadastrada = {
      codigoUnidade: this.codigoUnidade?.value,
      codigoDiaria: this.codigoDiaria?.value,
      quantidadeCamaCasal: this.quantidadeCamaCasal?.value,
      quantidadeCamaSolteiro: this.quantidadeCamaSolteiro?.value,
      porcentagemValorDiaria: this.porcentagemValorDiaria?.value,
      isAcrescimo: this.isAcrescimo?.value
    }

    console.log(this.unidadeHoteleiraCadastrada);

    this.formularioCadastroUnidadeHoteleira.reset(this.startFormularioCadastroUnidadeHoteleira);
    
  }

  get codigoUnidade() {
    return this.formularioCadastroUnidadeHoteleira.get('codigoUnidade');
  }

  get codigoDiaria() {
    return this.formularioCadastroUnidadeHoteleira.get('codigoDiaria');
  }

  get quantidadeCamaCasal() {
    return this.formularioCadastroUnidadeHoteleira.get('quantidadeCamaCasal');
  }

  get quantidadeCamaSolteiro() {
    return this.formularioCadastroUnidadeHoteleira.get('quantidadeCamaSolteiro');
  }

  get porcentagemValorDiaria() {
    return this.formularioCadastroUnidadeHoteleira.get('porcentagemValorDiaria');
  }

  get isAcrescimo() {
    return this.formularioCadastroUnidadeHoteleira.get('isAcrescimo');
  }

}



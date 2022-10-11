import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";

import { Hospede } from "src/app/interfaces/hospede";
import { Reserva } from "src/app/interfaces/reserva";

@Component({
  selector: 'app-cadastro-de-reservas',
  templateUrl: './cadastro-de-reservas.component.html',
  styleUrls: ['./cadastro-de-reservas.component.css']
})
export class CadastroDeReservasComponent implements OnInit {

  formularioCadastroReservas!: FormGroup;
  hospedeCadastrado!: Hospede;
  reservaCadastrada!: Reserva;
  startFormularioCadastroReservas = {
    nome: '',
    cpf: '',
    dataNascimento: '',
    email: '',
    telefone: '',
    cep: '',
    rua: '',
    bairro: '',
    cidade: '',
    situacao: 'pre-reservado',
    numeroHospedes: 0,
    dataChegadaHospede: '',
    dataSaidaHospede: '',
    observacaoReserva: '',
    codigoUnidadeHoteleira: 0 
  }

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.createFormularioCadastroReservas();
  }

  createFormularioCadastroReservas() {
    this.formularioCadastroReservas = this.formBuilder.group({
      nome: ['', [Validators.required]],
      cpf: ['', [Validators.required, Validators.minLength(11)]],
      dataNascimento: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      telefone: ['', [Validators.required, Validators.minLength(11)]],
      cep: ['', [Validators.minLength(8)]],
      rua: [''],
      bairro: [''],
      cidade: [''],
      situacao: ['pre-reservado'],
      numeroHospedes: [0, [Validators.min(1)]],
      dataChegadaHospede: ['', [Validators.required]],
      dataSaidaHospede: ['', [Validators.required]],
      observacaoReserva: [''],
      codigoUnidadeHoteleira: [0, [Validators.min(1)]]   
    });
  }

  cadastrarReserva():void {

    this.hospedeCadastrado = {
      nome: this.nome?.value,
      cpf: this.cpf?.value,
      dataNascimento: this.dataNascimento?.value,
      email: this.email?.value,
      telefone: this.telefone?.value,
      cep: this.cep?.value,
      rua: this.rua?.value,
      bairro: this.bairro?.value,
      cidade: this.cidade?.value
    }

    this.reservaCadastrada = {
      idReserva:'',
      nomeHospede:'',
      quarto: '',
      status:'',
      situacao: this.situacao?.value,
      numeroHospedes: this.numeroHospedes?.value,
      dataChegadaHospede: this.dataChegadaHospede?.value,
      dataSaidaHospede: this.dataSaidaHospede?.value,
      observacaoReserva: this.observacaoReserva?.value,
      cpfHospede: this.cpf?.value,
      codigoUnidadeHoteleira: this.codigoUnidadeHoteleira?.value
    }

    console.log(this.hospedeCadastrado);
    console.log(this.reservaCadastrada);

    this.formularioCadastroReservas.reset(this.startFormularioCadastroReservas);
      
  }

  get nome() {
    return this.formularioCadastroReservas.get('nome');
  }

  get cpf() {
    return this.formularioCadastroReservas.get('cpf');
  }

  get dataNascimento() {
    return this.formularioCadastroReservas.get('dataNascimento');
  }

  get email() {
    return this.formularioCadastroReservas.get('email');
  }

  get telefone() {
    return this.formularioCadastroReservas.get('telefone');
  }

  get cep() {
    return this.formularioCadastroReservas.get('cep');
  }

  get rua() {
    return this.formularioCadastroReservas.get('rua');
  }

  get bairro() {
    return this.formularioCadastroReservas.get('bairro');
  }

  get cidade() {
    return this.formularioCadastroReservas.get('cidade');
  }

  get situacao() {
    return this.formularioCadastroReservas.get('situacao');
  }

  get numeroHospedes() {
    return this.formularioCadastroReservas.get('numeroHospedes');
  }

  get dataChegadaHospede() {
    return this.formularioCadastroReservas.get('dataChegadaHospede');
  }

  get dataSaidaHospede() {
    return this.formularioCadastroReservas.get('dataSaidaHospede');
  }

  get observacaoReserva() {
    return this.formularioCadastroReservas.get('observacaoReserva');
  }

  get codigoUnidadeHoteleira() {
    return this.formularioCadastroReservas.get('codigoUnidadeHoteleira');
  }


 

}

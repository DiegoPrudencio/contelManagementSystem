import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-config-usuario',
  templateUrl: './config-usuario.component.html',
  styleUrls: ['./config-usuario.component.css']
})
export class ConfigUsuarioComponent implements OnInit {

  formulario: FormGroup; 

  constructor(private formBuilder: FormBuilder) { 
    this.formulario = this.formBuilder.group({
      nomeUser: ['', [Validators.required]],
      emailUser: ['', [Validators.required, Validators.email]],
      senhaUser: ['', [Validators.required]],
      confirSenhaUser: ['', [Validators.required]],
      nomeCompletoUser: ['', [Validators.required]],
      telefoneUser: ['', [Validators.required]]
    });
  }

    ngOnInit(): void {
    }

}

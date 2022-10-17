import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  formularioLogin: FormGroup;

  login: string = '';
  password: string = '';

  constructor(private formBuilder: FormBuilder) {
    this.formularioLogin = this.formBuilder.group({
      login: ['', [Validators.required]],
      password: ['',[Validators.required]],

    });
  }

  logar() {

    this.login = this.formularioLogin.get('login')?.value;
    this.password = this.formularioLogin.get('password')?.value;

  }

  ngOnInit(): void {
  }


}

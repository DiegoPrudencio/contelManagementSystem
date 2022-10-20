import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  formularioLogin: FormGroup;

  login: string = '';
  password: string = '';

  constructor(private formBuilder: FormBuilder, private router: Router) {
    this.formularioLogin = this.formBuilder.group({
      login: ['', [Validators.required]],
      password: ['',[Validators.required]],

    });
  }

  logar() {
    this.router.navigate(['menu/mapaDeReserva']);

    // this.login = this.formularioLogin.get('login')?.value;
    // this.password = this.formularioLogin.get('password')?.value;

  }

  ngOnInit(): void {
  }


}

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-config-diaria',
  templateUrl: './config-diaria.component.html',
  styleUrls: ['./config-diaria.component.css']
})
export class ConfigDiariaComponent implements OnInit {

  formulario: FormGroup; 
  
    constructor(private formBuilder: FormBuilder) { 
      this.formulario = this.formBuilder.group({
        segFeiraDiaria: ['', [Validators.required]],
        terFeiraDiaria: ['', [Validators.required]],
        quaFeiraDiaria: ['', [Validators.required]],
        quiFeiradiaria: ['', [Validators.required]],
        sexFeiraDiaria: ['', [Validators.required]],
        sabDiaria: ['', [Validators.required]],
        domDiaria: ['', [Validators.required]]
      });
    }

  ngOnInit(): void {
  }

}

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-config-hotel',
  templateUrl: './config-hotel.component.html',
  styleUrls: ['./config-hotel.component.css']
})
export class ConfigHotelComponent implements OnInit {

  formulario: FormGroup; 
  
    constructor(private formBuilder: FormBuilder) { 
      this.formulario = this.formBuilder.group({
        nomeHotel: ['', [Validators.required]],
        emailHotel: ['', [Validators.required]],
        siteHotel: ['', [Validators.required]],
        ruaHotel: ['', [Validators.required]],
        bairroHotel: ['', [Validators.required]],
        cnpjHotel: ['', [Validators.required]],
        telefoneHotel: ['', [Validators.required]],
        cepHotel: ['', [Validators.required]],
        numeroHotel: ['', [Validators.required]],
        cidadeHotel: ['', [Validators.required]]
      });
    }
  ngOnInit(): void {
  }

}

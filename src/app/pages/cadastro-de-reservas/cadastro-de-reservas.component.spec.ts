import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastroDeReservasComponent } from './cadastro-de-reservas.component';

describe('CadastroDeReservasComponent', () => {
  let component: CadastroDeReservasComponent;
  let fixture: ComponentFixture<CadastroDeReservasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CadastroDeReservasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CadastroDeReservasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

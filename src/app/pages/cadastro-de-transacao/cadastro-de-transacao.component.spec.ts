import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastroDeTransacaoComponent } from './cadastro-de-transacao.component';

describe('CadastroDeTransacaoComponent', () => {
  let component: CadastroDeTransacaoComponent;
  let fixture: ComponentFixture<CadastroDeTransacaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CadastroDeTransacaoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CadastroDeTransacaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

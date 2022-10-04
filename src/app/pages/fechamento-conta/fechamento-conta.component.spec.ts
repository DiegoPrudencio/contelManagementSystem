import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FechamentoContaComponent } from './fechamento-conta.component';

describe('FechamentoContaComponent', () => {
  let component: FechamentoContaComponent;
  let fixture: ComponentFixture<FechamentoContaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FechamentoContaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FechamentoContaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

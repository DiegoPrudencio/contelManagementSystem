import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastroDeUnidadeHoteleiraComponent } from './cadastro-de-unidade-hoteleira.component';

describe('CadastroDeUnidadeHoteleiraComponent', () => {
  let component: CadastroDeUnidadeHoteleiraComponent;
  let fixture: ComponentFixture<CadastroDeUnidadeHoteleiraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CadastroDeUnidadeHoteleiraComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CadastroDeUnidadeHoteleiraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

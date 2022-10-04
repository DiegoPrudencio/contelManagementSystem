import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MapaDeReservasComponent } from './mapa-de-reservas.component';

describe('MapaDeReservasComponent', () => {
  let component: MapaDeReservasComponent;
  let fixture: ComponentFixture<MapaDeReservasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MapaDeReservasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MapaDeReservasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

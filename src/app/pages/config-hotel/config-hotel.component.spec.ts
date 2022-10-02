import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfigHotelComponent } from './config-hotel.component';

describe('ConfigHotelComponent', () => {
  let component: ConfigHotelComponent;
  let fixture: ComponentFixture<ConfigHotelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConfigHotelComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConfigHotelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

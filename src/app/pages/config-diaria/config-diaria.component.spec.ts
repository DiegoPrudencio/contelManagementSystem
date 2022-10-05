import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfigDiariaComponent } from './config-diaria.component';

describe('ConfigDiariaComponent', () => {
  let component: ConfigDiariaComponent;
  let fixture: ComponentFixture<ConfigDiariaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConfigDiariaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConfigDiariaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

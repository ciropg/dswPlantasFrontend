import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClienteListadoHierbaComponent } from './cliente-listado-hierba.component';

describe('ClienteListadoHierbaComponent', () => {
  let component: ClienteListadoHierbaComponent;
  let fixture: ComponentFixture<ClienteListadoHierbaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ClienteListadoHierbaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClienteListadoHierbaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

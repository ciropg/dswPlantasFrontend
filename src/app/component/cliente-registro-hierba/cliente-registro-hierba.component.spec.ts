import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClienteRegistroHierbaComponent } from './cliente-registro-hierba.component';

describe('ClienteRegistroHierbaComponent', () => {
  let component: ClienteRegistroHierbaComponent;
  let fixture: ComponentFixture<ClienteRegistroHierbaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ClienteRegistroHierbaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClienteRegistroHierbaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

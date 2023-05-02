import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InicioCartasComponent } from './inicio-cartas.component';

describe('InicioCartasComponent', () => {
  let component: InicioCartasComponent;
  let fixture: ComponentFixture<InicioCartasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InicioCartasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InicioCartasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

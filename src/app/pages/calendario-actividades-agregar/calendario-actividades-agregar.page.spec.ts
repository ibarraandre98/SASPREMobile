import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CalendarioActividadesAgregarPage } from './calendario-actividades-agregar.page';

describe('CalendarioActividadesAgregarPage', () => {
  let component: CalendarioActividadesAgregarPage;
  let fixture: ComponentFixture<CalendarioActividadesAgregarPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CalendarioActividadesAgregarPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CalendarioActividadesAgregarPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CalendarioActividadesEditarPage } from './calendario-actividades-editar.page';

describe('CalendarioActividadesEditarPage', () => {
  let component: CalendarioActividadesEditarPage;
  let fixture: ComponentFixture<CalendarioActividadesEditarPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CalendarioActividadesEditarPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CalendarioActividadesEditarPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

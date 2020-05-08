import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PopInfoCalendarioActividadesComponent } from './pop-info-calendario-actividades.component';

describe('PopInfoCalendarioActividadesComponent', () => {
  let component: PopInfoCalendarioActividadesComponent;
  let fixture: ComponentFixture<PopInfoCalendarioActividadesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PopInfoCalendarioActividadesComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PopInfoCalendarioActividadesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FertilizacionesAgregarPage } from './fertilizaciones-agregar.page';

describe('FertilizacionesAgregarPage', () => {
  let component: FertilizacionesAgregarPage;
  let fixture: ComponentFixture<FertilizacionesAgregarPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FertilizacionesAgregarPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FertilizacionesAgregarPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

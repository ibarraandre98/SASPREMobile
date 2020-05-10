import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FertilizacionesEditarPage } from './fertilizaciones-editar.page';

describe('FertilizacionesEditarPage', () => {
  let component: FertilizacionesEditarPage;
  let fixture: ComponentFixture<FertilizacionesEditarPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FertilizacionesEditarPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FertilizacionesEditarPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

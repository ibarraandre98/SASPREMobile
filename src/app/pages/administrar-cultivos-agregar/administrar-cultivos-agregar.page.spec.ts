import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AdministrarCultivosAgregarPage } from './administrar-cultivos-agregar.page';

describe('AdministrarCultivosAgregarPage', () => {
  let component: AdministrarCultivosAgregarPage;
  let fixture: ComponentFixture<AdministrarCultivosAgregarPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdministrarCultivosAgregarPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AdministrarCultivosAgregarPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

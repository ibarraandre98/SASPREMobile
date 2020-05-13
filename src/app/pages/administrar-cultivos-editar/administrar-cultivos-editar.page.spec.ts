import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AdministrarCultivosEditarPage } from './administrar-cultivos-editar.page';

describe('AdministrarCultivosEditarPage', () => {
  let component: AdministrarCultivosEditarPage;
  let fixture: ComponentFixture<AdministrarCultivosEditarPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdministrarCultivosEditarPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AdministrarCultivosEditarPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

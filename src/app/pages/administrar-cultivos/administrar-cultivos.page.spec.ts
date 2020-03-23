import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AdministrarCultivosPage } from './administrar-cultivos.page';

describe('AdministrarCultivosPage', () => {
  let component: AdministrarCultivosPage;
  let fixture: ComponentFixture<AdministrarCultivosPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdministrarCultivosPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AdministrarCultivosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

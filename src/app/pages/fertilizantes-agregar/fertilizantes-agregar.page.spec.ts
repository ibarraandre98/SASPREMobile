import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FertilizantesAgregarPage } from './fertilizantes-agregar.page';

describe('FertilizantesAgregarPage', () => {
  let component: FertilizantesAgregarPage;
  let fixture: ComponentFixture<FertilizantesAgregarPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FertilizantesAgregarPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FertilizantesAgregarPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

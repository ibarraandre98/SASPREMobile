import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CostosAgregarPage } from './costos-agregar.page';

describe('CostosAgregarPage', () => {
  let component: CostosAgregarPage;
  let fixture: ComponentFixture<CostosAgregarPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CostosAgregarPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CostosAgregarPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

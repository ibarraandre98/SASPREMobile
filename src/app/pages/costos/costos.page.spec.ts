import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CostosPage } from './costos.page';

describe('CostosPage', () => {
  let component: CostosPage;
  let fixture: ComponentFixture<CostosPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CostosPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CostosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PopInfoCostosComponent } from './pop-info-costos.component';

describe('PopInfoCostosComponent', () => {
  let component: PopInfoCostosComponent;
  let fixture: ComponentFixture<PopInfoCostosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PopInfoCostosComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PopInfoCostosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PopInfoAlarmasComponent } from './pop-info-alarmas.component';

describe('PopInfoAlarmasComponent', () => {
  let component: PopInfoAlarmasComponent;
  let fixture: ComponentFixture<PopInfoAlarmasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PopInfoAlarmasComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PopInfoAlarmasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

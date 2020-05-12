import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PopInfoCultivosComponent } from './pop-info-cultivos.component';

describe('PopInfoCultivosComponent', () => {
  let component: PopInfoCultivosComponent;
  let fixture: ComponentFixture<PopInfoCultivosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PopInfoCultivosComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PopInfoCultivosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

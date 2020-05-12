import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PopCultivosComponent } from './pop-cultivos.component';

describe('PopCultivosComponent', () => {
  let component: PopCultivosComponent;
  let fixture: ComponentFixture<PopCultivosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PopCultivosComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PopCultivosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

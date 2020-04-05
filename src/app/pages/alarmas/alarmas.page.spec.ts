import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AlarmasPage } from './alarmas.page';

describe('AlarmasPage', () => {
  let component: AlarmasPage;
  let fixture: ComponentFixture<AlarmasPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlarmasPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AlarmasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { InsecticidasPage } from './insecticidas.page';

describe('InsecticidasPage', () => {
  let component: InsecticidasPage;
  let fixture: ComponentFixture<InsecticidasPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InsecticidasPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(InsecticidasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

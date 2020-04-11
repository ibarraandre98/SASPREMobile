import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { HistorialplagasPage } from './historialplagas.page';

describe('HistorialplagasPage', () => {
  let component: HistorialplagasPage;
  let fixture: ComponentFixture<HistorialplagasPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HistorialplagasPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(HistorialplagasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

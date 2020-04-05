import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AlarmaDetallesPage } from './alarma-detalles.page';

describe('AlarmaDetallesPage', () => {
  let component: AlarmaDetallesPage;
  let fixture: ComponentFixture<AlarmaDetallesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlarmaDetallesPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AlarmaDetallesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FertilizantesEditarPage } from './fertilizantes-editar.page';

describe('FertilizantesEditarPage', () => {
  let component: FertilizantesEditarPage;
  let fixture: ComponentFixture<FertilizantesEditarPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FertilizantesEditarPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FertilizantesEditarPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CostosEditarPage } from './costos-editar.page';

describe('CostosEditarPage', () => {
  let component: CostosEditarPage;
  let fixture: ComponentFixture<CostosEditarPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CostosEditarPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CostosEditarPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

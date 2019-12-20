import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CarreradetaillPage } from './carreradetaill.page';

describe('CarreradetaillPage', () => {
  let component: CarreradetaillPage;
  let fixture: ComponentFixture<CarreradetaillPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarreradetaillPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CarreradetaillPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

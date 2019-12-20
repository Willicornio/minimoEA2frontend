import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SubjectdetallPage } from './subjectdetall.page';

describe('SubjectdetallPage', () => {
  let component: SubjectdetallPage;
  let fixture: ComponentFixture<SubjectdetallPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubjectdetallPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SubjectdetallPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

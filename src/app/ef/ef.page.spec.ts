import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EfPage } from './ef.page';

describe('EfPage', () => {
  let component: EfPage;
  let fixture: ComponentFixture<EfPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EfPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EfPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

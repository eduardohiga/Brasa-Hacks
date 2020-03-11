import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FirstaccessPage } from './firstaccess.page';

describe('FirstaccessPage', () => {
  let component: FirstaccessPage;
  let fixture: ComponentFixture<FirstaccessPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FirstaccessPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FirstaccessPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AddmetaPage } from './addmeta.page';

describe('AddmetaPage', () => {
  let component: AddmetaPage;
  let fixture: ComponentFixture<AddmetaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddmetaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AddmetaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

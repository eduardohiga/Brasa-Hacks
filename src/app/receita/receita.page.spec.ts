import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ReceitaPage } from './receita.page';

describe('ReceitaPage', () => {
  let component: ReceitaPage;
  let fixture: ComponentFixture<ReceitaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReceitaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ReceitaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

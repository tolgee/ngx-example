import {async, TestBed, tick, fakeAsync} from '@angular/core/testing';
import {AppComponent} from './app.component';
import {NgxTolgeeModule} from '@tolgee/ngx';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
      imports: [
        NgxTolgeeModule.forRoot({}),
      ]
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });
});

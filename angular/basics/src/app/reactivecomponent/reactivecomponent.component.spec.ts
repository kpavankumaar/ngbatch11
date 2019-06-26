import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactivecomponentComponent } from './reactivecomponent.component';

describe('ReactivecomponentComponent', () => {
  let component: ReactivecomponentComponent;
  let fixture: ComponentFixture<ReactivecomponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReactivecomponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReactivecomponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

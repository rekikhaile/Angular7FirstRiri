import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HelloRiriyeComponent } from './hello-ririye.component';

describe('HelloRiriyeComponent', () => {
  let component: HelloRiriyeComponent;
  let fixture: ComponentFixture<HelloRiriyeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HelloRiriyeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HelloRiriyeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProOneComponent } from './pro-one.component';

describe('ProOneComponent', () => {
  let component: ProOneComponent;
  let fixture: ComponentFixture<ProOneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProOneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

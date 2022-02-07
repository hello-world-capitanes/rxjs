import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FromEventOperatorComponent } from './from-event-operator.component';

describe('FromEventOperatorComponent', () => {
  let component: FromEventOperatorComponent;
  let fixture: ComponentFixture<FromEventOperatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FromEventOperatorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FromEventOperatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

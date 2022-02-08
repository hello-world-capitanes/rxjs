import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DebounceTimeOperatorComponent } from './debounce-time-operator.component';

describe('DebounceTimeOperatorComponent', () => {
  let component: DebounceTimeOperatorComponent;
  let fixture: ComponentFixture<DebounceTimeOperatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DebounceTimeOperatorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DebounceTimeOperatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

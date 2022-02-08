import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForkOperatorComponent } from './fork-operator.component';

describe('ForkOperatorComponent', () => {
  let component: ForkOperatorComponent;
  let fixture: ComponentFixture<ForkOperatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ForkOperatorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ForkOperatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

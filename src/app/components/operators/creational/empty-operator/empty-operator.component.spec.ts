import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmptyOperatorComponent } from './empty-operator.component';

describe('EmptyOperatorComponent', () => {
  let component: EmptyOperatorComponent;
  let fixture: ComponentFixture<EmptyOperatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmptyOperatorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmptyOperatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

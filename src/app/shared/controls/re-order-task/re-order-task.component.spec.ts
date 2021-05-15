import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReOrderTaskComponent } from './re-order-task.component';

describe('ReOrderTaskComponent', () => {
  let component: ReOrderTaskComponent;
  let fixture: ComponentFixture<ReOrderTaskComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReOrderTaskComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReOrderTaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

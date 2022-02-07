import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterMakeupComponent } from './filter-makeup.component';

describe('FilterMakeupComponent', () => {
  let component: FilterMakeupComponent;
  let fixture: ComponentFixture<FilterMakeupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FilterMakeupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FilterMakeupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

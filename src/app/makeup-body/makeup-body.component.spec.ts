import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MakeupBodyComponent } from './makeup-body.component';

describe('MakeupBodyComponent', () => {
  let component: MakeupBodyComponent;
  let fixture: ComponentFixture<MakeupBodyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MakeupBodyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MakeupBodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

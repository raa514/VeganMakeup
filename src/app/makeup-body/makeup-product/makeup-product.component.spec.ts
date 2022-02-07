import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MakeupProductComponent } from './makeup-product.component';

describe('MakeupProductComponent', () => {
  let component: MakeupProductComponent;
  let fixture: ComponentFixture<MakeupProductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MakeupProductComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MakeupProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

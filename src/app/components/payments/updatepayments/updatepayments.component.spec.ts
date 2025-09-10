import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatepaymentsComponent } from './updatepayments.component';

describe('UpdatepaymentsComponent', () => {
  let component: UpdatepaymentsComponent;
  let fixture: ComponentFixture<UpdatepaymentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UpdatepaymentsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdatepaymentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

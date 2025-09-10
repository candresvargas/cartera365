import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowpaymentsComponent } from './showpayments.component';

describe('ShowpaymentsComponent', () => {
  let component: ShowpaymentsComponent;
  let fixture: ComponentFixture<ShowpaymentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ShowpaymentsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShowpaymentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

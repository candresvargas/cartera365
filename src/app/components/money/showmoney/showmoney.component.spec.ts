import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowmoneyComponent } from './showmoney.component';

describe('ShowmoneyComponent', () => {
  let component: ShowmoneyComponent;
  let fixture: ComponentFixture<ShowmoneyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ShowmoneyComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShowmoneyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowdelaysComponent } from './showdelays.component';

describe('ShowdelaysComponent', () => {
  let component: ShowdelaysComponent;
  let fixture: ComponentFixture<ShowdelaysComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ShowdelaysComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShowdelaysComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

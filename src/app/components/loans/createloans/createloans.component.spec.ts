import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateloansComponent } from './createloans.component';

describe('CreateloansComponent', () => {
  let component: CreateloansComponent;
  let fixture: ComponentFixture<CreateloansComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreateloansComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateloansComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

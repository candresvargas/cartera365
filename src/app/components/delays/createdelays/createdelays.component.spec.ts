import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatedelaysComponent } from './createdelays.component';

describe('CreatedelaysComponent', () => {
  let component: CreatedelaysComponent;
  let fixture: ComponentFixture<CreatedelaysComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreatedelaysComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreatedelaysComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

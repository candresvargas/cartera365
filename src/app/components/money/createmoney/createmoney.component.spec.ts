import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatemoneyComponent } from './createmoney.component';

describe('CreatemoneyComponent', () => {
  let component: CreatemoneyComponent;
  let fixture: ComponentFixture<CreatemoneyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreatemoneyComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreatemoneyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

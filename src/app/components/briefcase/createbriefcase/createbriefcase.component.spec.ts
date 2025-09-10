import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatebriefcaseComponent } from './createbriefcase.component';

describe('CreatebriefcaseComponent', () => {
  let component: CreatebriefcaseComponent;
  let fixture: ComponentFixture<CreatebriefcaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreatebriefcaseComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreatebriefcaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

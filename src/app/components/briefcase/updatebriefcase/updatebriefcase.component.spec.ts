import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatebriefcaseComponent } from './updatebriefcase.component';

describe('UpdatebriefcaseComponent', () => {
  let component: UpdatebriefcaseComponent;
  let fixture: ComponentFixture<UpdatebriefcaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UpdatebriefcaseComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdatebriefcaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

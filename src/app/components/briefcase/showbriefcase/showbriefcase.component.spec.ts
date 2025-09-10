import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowbriefcaseComponent } from './showbriefcase.component';

describe('ShowbriefcaseComponent', () => {
  let component: ShowbriefcaseComponent;
  let fixture: ComponentFixture<ShowbriefcaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ShowbriefcaseComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShowbriefcaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

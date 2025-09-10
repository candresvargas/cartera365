import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateloansComponent } from './updateloans.component';

describe('UpdateloansComponent', () => {
  let component: UpdateloansComponent;
  let fixture: ComponentFixture<UpdateloansComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UpdateloansComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateloansComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

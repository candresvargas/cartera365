import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatedelaysComponent } from './updatedelays.component';

describe('UpdatedelaysComponent', () => {
  let component: UpdatedelaysComponent;
  let fixture: ComponentFixture<UpdatedelaysComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UpdatedelaysComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdatedelaysComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

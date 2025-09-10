import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatemoneyComponent } from './updatemoney.component';

describe('UpdatemoneyComponent', () => {
  let component: UpdatemoneyComponent;
  let fixture: ComponentFixture<UpdatemoneyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UpdatemoneyComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdatemoneyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatedebtorsComponent } from './updatedebtors.component';

describe('UpdatedebtorsComponent', () => {
  let component: UpdatedebtorsComponent;
  let fixture: ComponentFixture<UpdatedebtorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UpdatedebtorsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdatedebtorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

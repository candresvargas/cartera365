import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowdebtorsComponent } from './showdebtors.component';

describe('ShowdebtorsComponent', () => {
  let component: ShowdebtorsComponent;
  let fixture: ComponentFixture<ShowdebtorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ShowdebtorsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShowdebtorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

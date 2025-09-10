import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatedebtorsComponent } from './createdebtors.component';

describe('CreatedebtorsComponent', () => {
  let component: CreatedebtorsComponent;
  let fixture: ComponentFixture<CreatedebtorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreatedebtorsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreatedebtorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

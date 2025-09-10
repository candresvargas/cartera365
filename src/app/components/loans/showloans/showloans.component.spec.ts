import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowloansComponent } from './showloans.component';

describe('ShowloansComponent', () => {
  let component: ShowloansComponent;
  let fixture: ComponentFixture<ShowloansComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ShowloansComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShowloansComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

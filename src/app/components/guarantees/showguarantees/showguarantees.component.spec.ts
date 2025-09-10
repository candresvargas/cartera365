import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowguaranteesComponent } from './showguarantees.component';

describe('ShowguaranteesComponent', () => {
  let component: ShowguaranteesComponent;
  let fixture: ComponentFixture<ShowguaranteesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ShowguaranteesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShowguaranteesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

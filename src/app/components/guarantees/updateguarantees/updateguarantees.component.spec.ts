import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateguaranteesComponent } from './updateguarantees.component';

describe('UpdateguaranteesComponent', () => {
  let component: UpdateguaranteesComponent;
  let fixture: ComponentFixture<UpdateguaranteesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UpdateguaranteesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateguaranteesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

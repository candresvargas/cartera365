import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateguaranteesComponent } from './createguarantees.component';

describe('CreateguaranteesComponent', () => {
  let component: CreateguaranteesComponent;
  let fixture: ComponentFixture<CreateguaranteesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreateguaranteesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateguaranteesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

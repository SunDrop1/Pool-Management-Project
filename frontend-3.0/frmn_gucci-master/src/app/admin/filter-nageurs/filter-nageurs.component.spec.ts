import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterNageursComponent } from './filter-nageurs.component';

describe('FilterNageursComponent', () => {
  let component: FilterNageursComponent;
  let fixture: ComponentFixture<FilterNageursComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FilterNageursComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FilterNageursComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

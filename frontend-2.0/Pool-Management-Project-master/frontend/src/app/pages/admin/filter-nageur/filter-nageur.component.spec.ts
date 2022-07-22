import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterNageurComponent } from './filter-nageur.component';

describe('FilterNageurComponent', () => {
  let component: FilterNageurComponent;
  let fixture: ComponentFixture<FilterNageurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FilterNageurComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FilterNageurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

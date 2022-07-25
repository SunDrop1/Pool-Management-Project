import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddNageurComponent } from './add-nageur.component';

describe('AddNageurComponent', () => {
  let component: AddNageurComponent;
  let fixture: ComponentFixture<AddNageurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddNageurComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddNageurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

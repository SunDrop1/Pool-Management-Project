import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditNageurComponent } from './edit-nageur.component';

describe('EditNageurComponent', () => {
  let component: EditNageurComponent;
  let fixture: ComponentFixture<EditNageurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditNageurComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditNageurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

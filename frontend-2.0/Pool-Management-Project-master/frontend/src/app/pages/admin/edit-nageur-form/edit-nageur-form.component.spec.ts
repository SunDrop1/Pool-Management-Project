import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditNageurFormComponent } from './edit-nageur-form.component';

describe('EditNageurFormComponent', () => {
  let component: EditNageurFormComponent;
  let fixture: ComponentFixture<EditNageurFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditNageurFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditNageurFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

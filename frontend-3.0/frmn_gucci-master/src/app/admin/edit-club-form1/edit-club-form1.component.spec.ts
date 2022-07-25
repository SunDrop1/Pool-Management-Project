import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditClubForm1Component } from './edit-club-form1.component';

describe('EditClubForm1Component', () => {
  let component: EditClubForm1Component;
  let fixture: ComponentFixture<EditClubForm1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditClubForm1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditClubForm1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

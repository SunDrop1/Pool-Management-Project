import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditClubFormComponent } from './edit-club-form.component';

describe('EditClubFormComponent', () => {
  let component: EditClubFormComponent;
  let fixture: ComponentFixture<EditClubFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditClubFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditClubFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

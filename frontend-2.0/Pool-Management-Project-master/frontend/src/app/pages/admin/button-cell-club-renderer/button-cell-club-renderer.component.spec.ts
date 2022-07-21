import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonCellClubRendererComponent } from './button-cell-club-renderer.component';

describe('ButtonCellClubRendererComponent', () => {
  let component: ButtonCellClubRendererComponent;
  let fixture: ComponentFixture<ButtonCellClubRendererComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ButtonCellClubRendererComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ButtonCellClubRendererComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

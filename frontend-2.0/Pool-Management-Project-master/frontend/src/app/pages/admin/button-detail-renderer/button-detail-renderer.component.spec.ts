import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonDetailRendererComponent } from './button-detail-renderer.component';

describe('ButtonDetailRendererComponent', () => {
  let component: ButtonDetailRendererComponent;
  let fixture: ComponentFixture<ButtonDetailRendererComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ButtonDetailRendererComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ButtonDetailRendererComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

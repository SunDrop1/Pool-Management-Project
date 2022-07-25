import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonDetail1RendererComponent } from './button-detail1-renderer.component';

describe('ButtonDetail1RendererComponent', () => {
  let component: ButtonDetail1RendererComponent;
  let fixture: ComponentFixture<ButtonDetail1RendererComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ButtonDetail1RendererComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ButtonDetail1RendererComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

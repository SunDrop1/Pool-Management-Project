import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonDetail2RendererComponent } from './button-detail2-renderer.component';

describe('ButtonDetail2RendererComponent', () => {
  let component: ButtonDetail2RendererComponent;
  let fixture: ComponentFixture<ButtonDetail2RendererComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ButtonDetail2RendererComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ButtonDetail2RendererComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

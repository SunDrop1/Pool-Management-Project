import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonEdit1RendererComponent } from './button-edit1-renderer.component';

describe('ButtonEdit1RendererComponent', () => {
  let component: ButtonEdit1RendererComponent;
  let fixture: ComponentFixture<ButtonEdit1RendererComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ButtonEdit1RendererComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ButtonEdit1RendererComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewdetailformComponent } from './viewdetailform.component';

describe('ViewdetailformComponent', () => {
  let component: ViewdetailformComponent;
  let fixture: ComponentFixture<ViewdetailformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewdetailformComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewdetailformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewNageursComponent } from './view-nageurs.component';

describe('ViewNageursComponent', () => {
  let component: ViewNageursComponent;
  let fixture: ComponentFixture<ViewNageursComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewNageursComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewNageursComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

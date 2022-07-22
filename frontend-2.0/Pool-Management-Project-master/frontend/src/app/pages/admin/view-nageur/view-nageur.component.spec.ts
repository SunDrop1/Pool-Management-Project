import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewNageurComponent } from './view-nageur.component';

describe('ViewNageurComponent', () => {
  let component: ViewNageurComponent;
  let fixture: ComponentFixture<ViewNageurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewNageurComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewNageurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

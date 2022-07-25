import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DatatestComponent } from './datatest.component';

describe('DatatestComponent', () => {
  let component: DatatestComponent;
  let fixture: ComponentFixture<DatatestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DatatestComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DatatestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

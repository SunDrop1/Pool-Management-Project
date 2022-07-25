import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LookForAccountComponent } from './look-for-account.component';

describe('LookForAccountComponent', () => {
  let component: LookForAccountComponent;
  let fixture: ComponentFixture<LookForAccountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LookForAccountComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LookForAccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LookForClubComponent } from './look-for-club.component';

describe('LookForClubComponent', () => {
  let component: LookForClubComponent;
  let fixture: ComponentFixture<LookForClubComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LookForClubComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LookForClubComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

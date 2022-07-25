import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NageurDetailFormComponent } from './nageur-detail-form.component';

describe('NageurDetailFormComponent', () => {
  let component: NageurDetailFormComponent;
  let fixture: ComponentFixture<NageurDetailFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NageurDetailFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NageurDetailFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

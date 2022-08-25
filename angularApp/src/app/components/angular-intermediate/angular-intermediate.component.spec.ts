import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularIntermediateComponent } from './angular-intermediate.component';

describe('AngularIntermediateComponent', () => {
  let component: AngularIntermediateComponent;
  let fixture: ComponentFixture<AngularIntermediateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AngularIntermediateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AngularIntermediateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

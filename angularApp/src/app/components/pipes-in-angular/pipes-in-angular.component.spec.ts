import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PipesInAngularComponent } from './pipes-in-angular.component';

describe('PipesInAngularComponent', () => {
  let component: PipesInAngularComponent;
  let fixture: ComponentFixture<PipesInAngularComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PipesInAngularComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PipesInAngularComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

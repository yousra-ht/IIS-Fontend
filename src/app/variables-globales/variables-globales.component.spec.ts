import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VariablesGlobalesComponent } from './variables-globales.component';

describe('VariablesGlobalesComponent', () => {
  let component: VariablesGlobalesComponent;
  let fixture: ComponentFixture<VariablesGlobalesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VariablesGlobalesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VariablesGlobalesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

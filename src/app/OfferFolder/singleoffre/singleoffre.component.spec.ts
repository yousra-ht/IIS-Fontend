import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleoffreComponent } from './singleoffre.component';

describe('SingleoffreComponent', () => {
  let component: SingleoffreComponent;
  let fixture: ComponentFixture<SingleoffreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SingleoffreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SingleoffreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

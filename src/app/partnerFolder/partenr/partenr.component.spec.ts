import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PartenrComponent } from './partenr.component';

describe('PartenrComponent', () => {
  let component: PartenrComponent;
  let fixture: ComponentFixture<PartenrComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PartenrComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PartenrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

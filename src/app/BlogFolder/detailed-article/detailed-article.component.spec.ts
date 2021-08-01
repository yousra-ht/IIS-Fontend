import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailedArticleComponent } from './detailed-article.component';

describe('DetailedArticleComponent', () => {
  let component: DetailedArticleComponent;
  let fixture: ComponentFixture<DetailedArticleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailedArticleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailedArticleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

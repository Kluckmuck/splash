import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SplashCardComponent } from './splash-card.component';

describe('SplashCardComponent', () => {
  let component: SplashCardComponent;
  let fixture: ComponentFixture<SplashCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SplashCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SplashCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

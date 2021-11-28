import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SplashFormComponent } from './splash-form.component';

describe('SplashFormComponent', () => {
  let component: SplashFormComponent;
  let fixture: ComponentFixture<SplashFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SplashFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SplashFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

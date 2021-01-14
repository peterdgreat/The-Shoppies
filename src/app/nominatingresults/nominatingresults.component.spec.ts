import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NominatingresultsComponent } from './nominatingresults.component';

describe('NominatingresultsComponent', () => {
  let component: NominatingresultsComponent;
  let fixture: ComponentFixture<NominatingresultsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NominatingresultsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NominatingresultsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NominatingbuttonComponent } from './nominatingbutton.component';

describe('NominatingbuttonComponent', () => {
  let component: NominatingbuttonComponent;
  let fixture: ComponentFixture<NominatingbuttonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NominatingbuttonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NominatingbuttonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShoppiesComponent } from './shoppies.component';

describe('ShoppiesComponent', () => {
  let component: ShoppiesComponent;
  let fixture: ComponentFixture<ShoppiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShoppiesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShoppiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

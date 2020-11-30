import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AisensumComponent } from './aisensum.component';

describe('AisensumComponent', () => {
  let component: AisensumComponent;
  let fixture: ComponentFixture<AisensumComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AisensumComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AisensumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

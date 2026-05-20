import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreamsCategory } from './creams-category';

describe('CreamsCategory', () => {
  let component: CreamsCategory;
  let fixture: ComponentFixture<CreamsCategory>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreamsCategory],
    }).compileComponents();

    fixture = TestBed.createComponent(CreamsCategory);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

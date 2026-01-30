import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TapePage } from './tape-page';

describe('TapePage', () => {
  let component: TapePage;
  let fixture: ComponentFixture<TapePage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TapePage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TapePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

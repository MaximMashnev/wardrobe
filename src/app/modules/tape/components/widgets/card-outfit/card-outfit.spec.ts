import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardOutfit } from './card-outfit';

describe('CardOutfit', () => {
  let component: CardOutfit;
  let fixture: ComponentFixture<CardOutfit>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardOutfit]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardOutfit);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

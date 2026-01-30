import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AiStylistPage } from './ai-stylist-page';

describe('AiStylistPage', () => {
  let component: AiStylistPage;
  let fixture: ComponentFixture<AiStylistPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AiStylistPage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AiStylistPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

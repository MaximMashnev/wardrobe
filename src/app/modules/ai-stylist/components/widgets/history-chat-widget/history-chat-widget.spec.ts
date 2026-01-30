import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HistoryChatWidget } from './history-chat-widget';

describe('HistoryChatWidget', () => {
  let component: HistoryChatWidget;
  let fixture: ComponentFixture<HistoryChatWidget>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HistoryChatWidget]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HistoryChatWidget);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

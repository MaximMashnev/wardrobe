import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InitialAiWindowWidget } from './initial-ai-window-widget';

describe('InitialAiWindowWidget', () => {
  let component: InitialAiWindowWidget;
  let fixture: ComponentFixture<InitialAiWindowWidget>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InitialAiWindowWidget]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InitialAiWindowWidget);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

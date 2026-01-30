import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LikeWidget } from './like-widget';

describe('LikeWidget', () => {
  let component: LikeWidget;
  let fixture: ComponentFixture<LikeWidget>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LikeWidget]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LikeWidget);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

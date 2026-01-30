import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClosetStuffWidget } from './closet-stuff-widget';

describe('ClosetStuffWidget', () => {
  let component: ClosetStuffWidget;
  let fixture: ComponentFixture<ClosetStuffWidget>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ClosetStuffWidget]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClosetStuffWidget);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

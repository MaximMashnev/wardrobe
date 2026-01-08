import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClosetPage } from './closet-page';

describe('ClosetPage', () => {
  let component: ClosetPage;
  let fixture: ComponentFixture<ClosetPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ClosetPage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClosetPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

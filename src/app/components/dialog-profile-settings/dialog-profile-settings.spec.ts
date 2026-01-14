import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogProfileSettings } from './dialog-profile-settings';

describe('DialogProfileSettings', () => {
  let component: DialogProfileSettings;
  let fixture: ComponentFixture<DialogProfileSettings>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DialogProfileSettings]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogProfileSettings);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogEditProfile } from './dialog-edit-profile';

describe('DialogEditProfile', () => {
  let component: DialogEditProfile;
  let fixture: ComponentFixture<DialogEditProfile>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DialogEditProfile]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogEditProfile);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

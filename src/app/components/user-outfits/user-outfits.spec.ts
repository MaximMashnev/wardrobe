import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserOutfits } from './user-outfits';

describe('UserOutfits', () => {
  let component: UserOutfits;
  let fixture: ComponentFixture<UserOutfits>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserOutfits]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserOutfits);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

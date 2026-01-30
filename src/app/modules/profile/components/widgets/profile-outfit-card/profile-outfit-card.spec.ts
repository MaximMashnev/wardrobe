import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileOutfitCard } from './profile-outfit-card';

describe('ProfileOutfitCard', () => {
  let component: ProfileOutfitCard;
  let fixture: ComponentFixture<ProfileOutfitCard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProfileOutfitCard]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProfileOutfitCard);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

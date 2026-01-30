import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileCardWidget } from './profile-card-widget';

describe('ProfileCardWidget', () => {
  let component: ProfileCardWidget;
  let fixture: ComponentFixture<ProfileCardWidget>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProfileCardWidget]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProfileCardWidget);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

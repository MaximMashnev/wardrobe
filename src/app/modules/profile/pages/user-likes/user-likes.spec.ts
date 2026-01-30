import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserLikes } from './user-likes';

describe('UserLikes', () => {
  let component: UserLikes;
  let fixture: ComponentFixture<UserLikes>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserLikes]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserLikes);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

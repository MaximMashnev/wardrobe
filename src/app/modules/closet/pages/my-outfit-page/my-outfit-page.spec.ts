import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyOutfitPage } from './my-outfit-page';

describe('MyOutfitPage', () => {
  let component: MyOutfitPage;
  let fixture: ComponentFixture<MyOutfitPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MyOutfitPage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MyOutfitPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

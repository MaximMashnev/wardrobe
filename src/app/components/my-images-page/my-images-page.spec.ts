import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyImagesPage } from './my-images-page';

describe('MyImagesPage', () => {
  let component: MyImagesPage;
  let fixture: ComponentFixture<MyImagesPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MyImagesPage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MyImagesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

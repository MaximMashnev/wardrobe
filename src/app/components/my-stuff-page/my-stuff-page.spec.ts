import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyStuffPage } from './my-stuff-page';

describe('MyStuffPage', () => {
  let component: MyStuffPage;
  let fixture: ComponentFixture<MyStuffPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MyStuffPage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MyStuffPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogSelStuffForOutfits } from './dialog-sel-stuff-for-outfits';

describe('DialogSelStuffForOutfits', () => {
  let component: DialogSelStuffForOutfits;
  let fixture: ComponentFixture<DialogSelStuffForOutfits>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DialogSelStuffForOutfits]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogSelStuffForOutfits);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

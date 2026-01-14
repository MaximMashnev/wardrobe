import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogShowOutfit } from './dialog-show-outfit';

describe('DialogShowOutfit', () => {
  let component: DialogShowOutfit;
  let fixture: ComponentFixture<DialogShowOutfit>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DialogShowOutfit]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogShowOutfit);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

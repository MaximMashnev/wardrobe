import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogAddEditOutfit } from './dialog-add-edit-outfit';

describe('DialogAddEditOutfit', () => {
  let component: DialogAddEditOutfit;
  let fixture: ComponentFixture<DialogAddEditOutfit>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DialogAddEditOutfit]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogAddEditOutfit);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

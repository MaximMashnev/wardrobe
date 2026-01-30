import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogAddEditStuff } from './dialog-add-edit-stuff';

describe('DialogAddEditStuff', () => {
  let component: DialogAddEditStuff;
  let fixture: ComponentFixture<DialogAddEditStuff>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DialogAddEditStuff]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogAddEditStuff);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

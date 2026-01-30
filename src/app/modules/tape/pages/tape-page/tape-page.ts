import { UserService } from '../../../../shared/services/user-service';
import { Outfit } from '../../../../shared/models/outfit';
import { OutfitService } from '../../../outfit/services/outfit-service';
import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogShowOutfit } from '../../../../shared/components/dialogs/dialog-show-outfit/dialog-show-outfit';
import { publicUserInfo } from '../../../../shared/models/publicUserInfo';
import {MatChipsModule} from '@angular/material/chips';
import {FormControl, FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatSelectModule} from '@angular/material/select';
import {MatFormFieldModule} from '@angular/material/form-field';
import { CardOutfit } from "../../components/widgets/card-outfit/card-outfit";

@Component({
  standalone: true,
  selector: 'app-tape-page',
  imports: [
    FormsModule,
    MatChipsModule,
    MatFormFieldModule,
    MatSelectModule,
    FormsModule,
    ReactiveFormsModule,
    CardOutfit
],
  templateUrl: './tape-page.html',
  styleUrl: './tape-page.css',
})
export class TapePage implements OnInit {

  constructor (
    public dialog: MatDialog,
    private OutfitService: OutfitService,
    private UserService: UserService,
    public cdr: ChangeDetectorRef,
  ) {

  }

  ngOnInit(): void {
    this.getOutFits();
    this.getFilterData();
  }

  // TODO: сделать автоподрузку при скролле, оформление селекта и чипсов

  outfitCards!: Outfit[];
  users!: publicUserInfo[];
  filters!: any;
  selectTags!: string[];
  selectStyles = new FormControl([]);
  timeout: any;

  openDialogShowOutfit(card: Outfit, user: publicUserInfo) {
    this.dialog.open(DialogShowOutfit, {
      data: [card, user],
      maxWidth: '1080px',
    });
  }

  getFilterData() {
    return this.OutfitService.getData().subscribe({
      next: (data) => {
        this.filters = data[0];
        this.cdr.detectChanges();
      }
    })
  }

  getOutFits() {
    return this.OutfitService.getOutfitsForTape().subscribe({
      next: (data) => {
        this.outfitCards = data;
        this.getUsersInfo();
        this.cdr.detectChanges();
      },
      error: (err) => {
        console.log(err);
      }
    })
  }

  getOutfitsWithFiltes() {
    let urlFilters = "";
    clearTimeout(this.timeout);
    this.timeout = setTimeout(() => {
      try {
        this.selectTags.map(value => urlFilters += "&tag[]=" + value);
      }
      catch {
        console.log("Теги не выбраны");
      }
      this.selectStyles.value?.map(value => urlFilters += "&style[]=" + value);
      this.OutfitService.getOutfitsForTapeWithFilters(
        urlFilters
      ).subscribe({
        next: (data) => {
          this.outfitCards = data;
          this.cdr.detectChanges();
        }
      })
      console.log(urlFilters);
    }, 500);
  }

  getUsersInfo() {
    return this.UserService.getUsersInfo(
      this.outfitCards.reduce((url, card) => url + "id=" + card.user_id + "&", "")
    ).subscribe({
      next: (data) => {
        this.users = data;
        this.cdr.detectChanges();
      },
      error(err) {
        console.log(err);
      },
    })
  }
}

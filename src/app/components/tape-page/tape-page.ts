import { UserService } from './../../service/user-service';
import { Outfit } from './../../models/outfit';
import { OutfitService } from './../../service/outfit-service';
import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { TuiLike, TuiAvatar,} from '@taiga-ui/kit';
import { MatDialog } from '@angular/material/dialog';
import { DialogShowOutfit } from '../dialog-show-outfit/dialog-show-outfit';
import { publicUserInfo } from '../../models/publicUserInfo';
import {MatChipsModule} from '@angular/material/chips';
import {FormControl, FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatSelectModule} from '@angular/material/select';
import {MatFormFieldModule} from '@angular/material/form-field';

@Component({
  standalone: true,
  selector: 'app-tape-page',
  imports: [
    TuiLike,
    TuiAvatar,
    FormsModule,
    MatChipsModule,
    MatFormFieldModule,
    MatSelectModule,
    FormsModule,
    ReactiveFormsModule
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
      this.OutfitService.getOutfitsForTapeWithFilters(urlFilters).subscribe({
        next: (data) => {
          this.outfitCards = data;
          this.cdr.detectChanges();
        }
      })
      console.log(urlFilters);
    }, 500);
  }

  getUsersInfo() {
    let urlIds = "";
    for (let card of this.outfitCards) {
      urlIds += "id=" + card.user_id + "&";
    }
    return this.UserService.getUsersInfo(urlIds).subscribe({
      next: (data) => {
        this.users = data;
        this.cdr.detectChanges();
      },
      error(err) {
        console.log(err);
      },
    })
  }

  canLiket(userId: number): boolean {
    // TODO Добавить то же самое в просмотр outfit
    try {
      let isAuthorized = localStorage.getItem("Bearer") ? true : false;
      let myOutfitCard = (+localStorage.getItem("userId")! == userId) ? true : false;
      if (isAuthorized && !myOutfitCard) {
        return true;
      }
      else {
        return false;
      }
    }
    catch {
      return false;
    }
  }

  putLike(outfitId: number) {
    // TODO добавить в модель пользователя список с ид лайкнутых карточек, убрать из модели карточек beenLiked
  }

  definitionLikes(numLikes: number) {
    let length = (numLikes.toString().length);
    let str = (numLikes / (length > 6 ? 1e6 : 1e3) ).toString();

    if (length < 4) return numLikes;
    if (str[3] == '.') {
      return str.slice(0, 3) + (length > 6 ? "m": "k");
    }
    else {
      return str.slice(0, 4) + (length > 6 ? "m": "k");
    }
  }
}

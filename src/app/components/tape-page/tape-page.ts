import { UserService } from './../../service/user-service';
import { Outfit } from './../../models/outfit';
import { OutfitService } from './../../service/outfit-service';
import { Component, inject, OnInit, ChangeDetectorRef } from '@angular/core';
import { TuiLike, TuiAvatar, TuiFilter } from '@taiga-ui/kit';
import {FormsModule} from '@angular/forms';
import {TuiTextfield} from '@taiga-ui/core';
import {
  TUI_COUNTRIES,
  TuiChevron,
  TuiComboBox,
  TuiDataListWrapper,
  TuiFilterByInputPipe,
} from '@taiga-ui/kit';
import {BehaviorSubject, map, type Observable} from 'rxjs';
import { AsyncPipe } from '@angular/common';
import { MatDialog } from '@angular/material/dialog';
import { DialogShowOutfit } from '../dialog-show-outfit/dialog-show-outfit';
import { publicUserInfo } from '../../models/publicUserInfo';

const TAGS = {
    EveryDay: 'На каждый день',
    Office: 'В офис',
    Party: 'На вечеринку',
    Workout: 'На тренировку',
    Meeting: 'На свидание',
    Vacation: 'В отпуск',
    Theater: 'В театр',
    House: 'Для дома',
};

@Component({
  standalone: true,
  selector: 'app-tape-page',
  imports: [
    TuiLike,
    TuiAvatar,
    AsyncPipe,
    FormsModule,
    TuiChevron,
    TuiComboBox,
    TuiDataListWrapper,
    TuiFilterByInputPipe,
    TuiTextfield,
    TuiFilter,
  ],
  templateUrl: './tape-page.html',
  styleUrl: './tape-page.css',
})
export class TapePage implements OnInit {
  protected readonly countries$: Observable<string[]> = inject(TUI_COUNTRIES).pipe(
      map(Object.values),
  );

  protected value: string | null = null;

  protected readonly items = Object.values(TAGS);
  protected readonly filters$ = new BehaviorSubject<readonly string[]>([]);

  protected readonly checked$ = this.filters$.pipe(
      map(({length}) => (length === this.items.length ? 'checked' : '')),
  );

  protected readonly model$ = this.filters$.pipe(
      map((value) => (value.length === this.items.length ? [] : value)),
  );

  protected onModelChange(model: readonly string[]): void {
      this.filters$.next(model);
  }

  protected toggleAll(): void {
      this.filters$.next(
          this.items.length === this.filters$.value.length ? [] : [...this.items],
      );
  }

  constructor (
    public dialog: MatDialog,
    private OutfitService: OutfitService,
    private UserService: UserService,
    public cdr: ChangeDetectorRef,
  ) {

  }

  ngOnInit(): void {
    this.getOutFits();
  }

  // TODO: Сделать выбор стилей из мок, подключить чипсы к фильтру, вывод опубликованных образов по фильтру и просто, сделать автоподрузку при скролле

  outfitCards!: any;
  users!: any;
  isAuthorized: boolean = localStorage.getItem("Bearer") ? true : false;

  openDialogShowOutfit(card: Outfit, user: publicUserInfo) {
    this.dialog.open(DialogShowOutfit, {
      data: [card, user],
      maxWidth: '1080px',
    });
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

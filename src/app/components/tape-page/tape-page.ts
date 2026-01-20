import { Component, inject } from '@angular/core';
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
import { Outfit } from '../../models/outfit';

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
export class TapePage {
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
    ) {

    }

    cards: Outfit[] = [
      {
        id: 1,
        username: 'UserName_1',
        imgProfile: 'U1',
        style: 'style_1',
        tag: 'tag_1',
        imgs: [
          'https://i.pinimg.com/736x/72/da/b9/72dab97065702d2e21a6933b5d937002.jpg',
          'https://i.pinimg.com/1200x/f9/1b/38/f91b38b62b069ff7d769ab4311627d7b.jpg',
          'https://i.pinimg.com/736x/fd/6d/0a/fd6d0a93824fa83f0f73ee35b0acaecf.jpg',
        ],
        likesCounter: 999,
        beenLiked: true,
        userId: 1,
        stuffIds: [1, 2, 3, 4],
        status: 'public'
      },
      {
        id: 2,
        username: 'UserName_2',
        imgProfile: 'U2',
        style: 'style_2',
        tag: 'tag_2',
        imgs: [
          'https://i.pinimg.com/1200x/f9/1b/38/f91b38b62b069ff7d769ab4311627d7b.jpg',
          'https://i.pinimg.com/736x/72/da/b9/72dab97065702d2e21a6933b5d937002.jpg',
          'https://i.pinimg.com/736x/fd/6d/0a/fd6d0a93824fa83f0f73ee35b0acaecf.jpg',
        ],
        stuffIds: [2],
        likesCounter: 123456,
        beenLiked: false,
        userId: 2,
        status: 'public'
      },
      {
        id: 3,
        username: 'UserName_3',
        imgProfile: 'U3',
        style: 'style_3',
        tag: 'tag_3',
        imgs: [
          'https://i.pinimg.com/736x/fd/6d/0a/fd6d0a93824fa83f0f73ee35b0acaecf.jpg',
          'https://i.pinimg.com/1200x/f9/1b/38/f91b38b62b069ff7d769ab4311627d7b.jpg',
          'https://i.pinimg.com/736x/72/da/b9/72dab97065702d2e21a6933b5d937002.jpg',
        ],
        likesCounter: 123456789,
        beenLiked: true,
        userId: 3,
        stuffIds: [3],
        status: 'public'
      }
    ]

    isAuthorized: boolean = true;

    openDialogShowOutfit(card: Outfit) {
      this.dialog.open(DialogShowOutfit, {
        data: card,
        maxWidth: '1080px',
      });
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

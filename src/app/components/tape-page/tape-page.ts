import {ChangeDetectionStrategy, Component, inject, ViewEncapsulation} from '@angular/core';
import { TuiLike, TuiAvatar } from '@taiga-ui/kit';
import {FormsModule} from '@angular/forms';
import {TuiTextfield} from '@taiga-ui/core';
import {
  TUI_COUNTRIES,
  TuiChevron,
  TuiComboBox,
  TuiDataListWrapper,
  TuiFilterByInputPipe,
} from '@taiga-ui/kit';
import {map, type Observable} from 'rxjs';
import { AsyncPipe } from '@angular/common';

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
  ],
  templateUrl: './tape-page.html',
  styleUrl: './tape-page.css',
})
export class TapePage {
	  protected readonly countries$: Observable<string[]> = inject(TUI_COUNTRIES).pipe(
        map(Object.values),
    );

    protected value: string | null = null;
    protected value1: string | null = null;
    protected value2: string | null = null;
    protected value3: string | null = null;

    cards = [
      {
        id: 1,
        username: 'UserName_1',
        imageProfile: 'U1',
        imageStyle: 'imageStyle_1',
        imageImage: 'https://i.pinimg.com/736x/72/da/b9/72dab97065702d2e21a6933b5d937002.jpg',
        likesCounter: 1,
        beenLiked: true
      },
      {
        id: 2,
        username: 'UserName_2',
        imageProfile: 'U2',
        imageStyle: 'imageStyle_2',
        imageImage: 'https://i.pinimg.com/1200x/f9/1b/38/f91b38b62b069ff7d769ab4311627d7b.jpg',
        likesCounter: 2,
        beenLiked: false
      },
      {
        id: 3,
        username: 'UserName_3',
        imageProfile: 'U3',
        imageStyle: 'imageStyle_3',
        imageImage: 'https://i.pinimg.com/736x/fd/6d/0a/fd6d0a93824fa83f0f73ee35b0acaecf.jpg',
        likesCounter: 3,
        beenLiked: true
      }
    ]

    isAuthorized: boolean = true;
}

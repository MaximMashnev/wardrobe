import { Component, Input} from '@angular/core';
import { Outfit } from '../../../../../shared/models/outfit';
import { publicUserInfo } from '../../../../../shared/models/publicUserInfo';
import { MatDialog } from '@angular/material/dialog';
import { DialogShowOutfit } from '../../../../../shared/components/dialogs/dialog-show-outfit/dialog-show-outfit';
import { TuiAvatar } from "@taiga-ui/kit";
import { LikeWidget } from "../../../../../shared/components/widgets/like-widget/like-widget";

@Component({
  selector: 'card-outfit',
  imports: [TuiAvatar, LikeWidget],
  templateUrl: './card-outfit.html',
  styleUrl: './card-outfit.css',
})
export class CardOutfit {

  @Input()
  card!: Outfit;

  @Input()
  user!: publicUserInfo;

  constructor(
    public dialog: MatDialog,
  ) {}

  openDialogShowOutfit(card: Outfit, user: publicUserInfo) {
    this.dialog.open(DialogShowOutfit, {
      data: [card, user],
      maxWidth: '1080px',
    });
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

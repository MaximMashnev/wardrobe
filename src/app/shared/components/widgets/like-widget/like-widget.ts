import { TuiLike } from '@taiga-ui/kit';
import { Outfit } from './../../../models/outfit';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'like-widget',
  imports: [TuiLike],
  templateUrl: './like-widget.html',
  styleUrl: './like-widget.css',
})
export class LikeWidget {

  @Input()
  outfit!: Outfit;

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

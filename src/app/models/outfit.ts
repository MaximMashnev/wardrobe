export class Outfit {
  constructor () {
    this.id = null;
    this.userId = null;
    this.username = "";
    this.imgProfile = (this.username.includes(" ")) ? this.username.split(' ')[0]+this.username.split(' ')[1] : this.username.slice(0, 2);
    this.style = "";
    this.tag = "";
    this.imgs = [];
    this.stuffIds = [];
    this.likesCounter = 0;
    this.beenLiked = false;
    this.status = 'private';
  }

  id: number | null;
  userId: number | null;
  username: string;
  imgProfile: string;
  style: string;
  tag: string;
  imgs: Array<string>;
  stuffIds: Array<number>;
  likesCounter: number;
  beenLiked: boolean;
  status: 'private' | 'public' | 'hidden';
}

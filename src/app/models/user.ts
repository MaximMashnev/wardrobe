export class User {
  constructor() {
    this.id = null;
    this.role = "user";
    this.email = "";
    this.username = "";
    this.gender = "";
    this.height = 0;
    this.weight = 0;
    this.shoeSize = "";
    this.clothingSize = "";
    this.otherInfo = "";
    this.subscriptions = 0;
    this.likes = 0;
    this.subscribers = 0;
    this.likesHidden = false;
  }

  id: number | null;
  role: "admin" | "user";
  email: string;
  username: string;
  gender: string;
  height: number;
  weight: number;
  shoeSize: string;
  clothingSize: string;
  otherInfo: string;
  subscriptions: number;
  likes: number;
  subscribers: number;
  likesHidden: boolean;
}

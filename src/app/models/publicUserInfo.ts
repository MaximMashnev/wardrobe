export class publicUserInfo {
  constructor (
    public username: string,
    public id: number,
    public imgProfile: string,
    public gender: string,
    public height: number,
    public weight: number,
    public shoeSize: string,
    public clothingSize: string,
    public otherInfo: string,
    public subscriptions: number,
    public likes: number,
    public subscribers: number,
    public likesHidden: boolean,
  ) {}
}

export class User {
  constructor(
    public email: string = "",
    public username: string  = "",
    public password: string  = "",
    public id: number | null = null,
    public imgProfile: string = "https://static.vecteezy.com/system/resources/previews/036/280/654/non_2x/default-avatar-profile-icon-social-media-user-image-gray-avatar-icon-blank-profile-silhouette-illustration-vector.jpg",
    public role: "admin" | "user" = "user",
    public gender: string  = "",
    public height: number = 0,
    public weight: number = 0,
    public shoeSize: string  = "",
    public clothingSize: string  = "",
    public otherInfo: string  = "",
    public subscriptions: number = 0,
    public likes: number = 0,
    public subscribers: number = 0,
    public likesHidden: boolean = false,
  ) {
    // this.imgProfile = username.includes(" ") ? username.split(' ')[0] + username.split(' ')[1] : username.slice(0, 2);
  }
}

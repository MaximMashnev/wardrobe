export class Outfit {
  constructor (
    public id: number | null = null,
    public user_id: number = +localStorage.getItem('userId')!,
    public name: string = "",
    public style: string = "",
    public tag: string = "",
    public imgs: Array<string> = [],
    public stuffIds: Array<number> = [],
    public likesCounter: number = 0,
    public beenLiked: boolean = false,
    public dateLastWear: Date | string = "Отсутствует",
    public countsWear: number = 0,
    public cost: number = 0,
    public status: 'private' | 'public' | 'hidden' = 'private',
  ) {}
}

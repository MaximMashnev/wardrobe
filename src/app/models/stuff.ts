export class Stuff {
  constructor(
    public id: number | null = null,
    public img: string = "",
    public brand: string = "",
    public name: string = "",
    public dateLastWear: Date | string = "", //new Date(),
    public countsWear: number = 0,
    public size: string = "",
    public category: string = "",
    public cost: number = 0,
    public link: string = ""
  ) {}
}

import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import {TuiHint} from '@taiga-ui/core';

@Component({
  selector: 'app-my-stuff-page',
  imports: [MatIconModule, TuiHint],
  templateUrl: './my-stuff-page.html',
  styleUrl: './my-stuff-page.css',
})
export class MyStuffPage {
  clothings = [
    {
      id: 1,
      image: "https://i.pinimg.com/736x/5e/8f/e1/5e8fe1af07f1067758b3d69ce7ddd27f.jpg",
      brand: "Бренд 1",
      name: "Название 1",
      dateLastWear: '01.01.2026',
      countsWear: 1,
      cost: 100000,
      currency: '₽',
      link: 'https://ru.pinterest.com/pin/477733472992433373/'
    },
    {
      id: 2,
      image: "https://i.pinimg.com/736x/da/82/ac/da82ac5c3a35816f523469b06c6d8362.jpg",
      brand: "Бренд 2",
      name: "Название 2",
      dateLastWear: '02.01.2026',
      countsWear: 2,
      cost: 2000,
      currency: '₽',
      link: 'https://ru.pinterest.com/pin/137148751151584415/'
    },
    {
      id: 3,
      image: "https://i.pinimg.com/736x/0c/9e/24/0c9e24fdc7e5c457bd6979d03fd110c0.jpg",
      brand: "Бренд 3",
      name: "Название 3",
      dateLastWear: '03.01.2026',
      countsWear: 3,
      cost: 3000,
      currency: '₽',
      link: 'https://ru.pinterest.com/pin/1829656094469457/'
    },
  ]
}

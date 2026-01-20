import { Component } from '@angular/core';
import { MatIconModule } from "@angular/material/icon";
import {TuiHint} from '@taiga-ui/core';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-my-images-page',
  imports: [MatIconModule, TuiHint, RouterLink],
  templateUrl: './my-images-page.html',
  styleUrl: './my-images-page.css',
})
export class MyImagesPage {
  images = [
    {
      id: 1,
      imageId: 1,
      image: "https://i.pinimg.com/736x/9f/52/e6/9f52e6bc3a4aecda1d22ae903c3aa1bf.jpg",
      name: "Имя образа 1",
      style: "Стиль 1",
      dateLastWear: '01.01.2026',
      countsWear: 1,
      cost: 1000,
      currency: '₽',
    },
    {
      id: 2,
      imageId: 2,
      image: "https://i.pinimg.com/736x/64/2e/7a/642e7a35f2717e4da5c41c15fdbab747.jpg",
      name: "Имя образа 2",
      style: "Стиль 2",
      dateLastWear: '02.01.2026',
      countsWear: 2,
      cost: 2000,
      currency: '₽',
    },
    {
      id: 3,
      imageId: 3,
      image: "https://i.pinimg.com/736x/09/48/00/09480044408fc3ac77d7bd6e3136c5bb.jpg",
      name: "Имя образа 3",
      style: "Стиль 3",
      dateLastWear: '03.01.2026',
      countsWear: 3,
      cost: 3000,
      currency: '₽',
    },
  ]
}

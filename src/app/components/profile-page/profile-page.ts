import { Component, input } from '@angular/core';
import { MatIconModule } from "@angular/material/icon";
import {TuiHint} from '@taiga-ui/core';
import { RouterOutlet, RouterLinkActive, RouterLinkWithHref } from '@angular/router';

@Component({
  selector: 'app-profile-page',
  imports: [
    MatIconModule,
    TuiHint,
    RouterOutlet,
    RouterLinkActive,
    RouterLinkWithHref
  ],
  templateUrl: './profile-page.html',
  styleUrl: './profile-page.css',
})
export class ProfilePage {
  myProfile: boolean = false;
  profileId = input.required<string>();
  profileInfo: any;

  constructor () {

  }

  getProfileInfo(Id: any) {
    const profilesInfo = [
      {
        id: 1,
        username: 'UserName_1',
        imageProfile: 'https://i.pinimg.com/736x/5f/04/09/5f0409e4db4e898c99b925ca951ae201.jpg',
        gender: 'женщина',
        height: 10,
        weight: 10,
        shoeSize: '42',
        clothingSize: 'M',
        otherInfo: 'Привет, Мир!',
        subscriptions: 10,
        likes: 10,
        subscribers: 20
      },
      {
        id: 2,
        username: 'UserName_2',
        imageProfile: 'https://i.pinimg.com/736x/5f/04/09/5f0409e4db4e898c99b925ca951ae201.jpg',
        gender: 'женщина',
        height: 20,
        weight: 20,
        shoeSize: '52',
        clothingSize: 'M',
        otherInfo: 'Привет, Мир2!',
        subscriptions: 20,
        likes: 20,
        subscribers: 20
      },
    ]

    if (Id == 0) this.myProfile = true;
    console.log(this.profileInfo);
    return this.profileInfo = profilesInfo[Id];
  }
}

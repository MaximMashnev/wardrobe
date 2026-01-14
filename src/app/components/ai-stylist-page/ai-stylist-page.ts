import { Component } from '@angular/core';
import { TuiTextfieldComponent } from "@taiga-ui/core";
import {FormsModule} from '@angular/forms';
import {TuiTextfield} from '@taiga-ui/core';
import {TuiTextarea} from '@taiga-ui/kit';

@Component({
  selector: 'app-ai-stylist-page',
  imports: [
    TuiTextfieldComponent,
     FormsModule,
     TuiTextfield,
     TuiTextarea,
    ],
  templateUrl: './ai-stylist-page.html',
  styleUrl: './ai-stylist-page.css',
})
export class AiStylistPage {
  protected value = '';
  chatHistory = [
    {
      date: '21.01.2026',
      chats: [
        {
          name: "test1",
          id: 1
        },
        {
          name: "test2",
          id: 2
        },
      ]
    },
    {
      date: '22.01.2026',
      chats: [
        {
          name: "test3",
          id: 3
        },
        {
          name: "test4",
          id: 4
        },
      ]
    },
    {
      date: '23.01.2026',
      chats: [
        {
          name: "test5",
          id: 5
        },
        {
          name: "test6",
          id: 6
        },
      ]
    },
    {
      date: '24.01.2026',
      chats: [
        {
          name: "test7",
          id: 7
        },
        {
          name: "test8",
          id: 8
        },
      ]
    },
  ]
}

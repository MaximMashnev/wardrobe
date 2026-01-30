import { Component} from '@angular/core';

@Component({
  selector: 'history-chat-widget',
  imports: [],
  templateUrl: './history-chat-widget.html',
  styleUrl: './history-chat-widget.css',
})
export class HistoryChatWidget {

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

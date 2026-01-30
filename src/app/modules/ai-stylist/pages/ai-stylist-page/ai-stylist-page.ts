import { Component } from '@angular/core';
import { InitialAiWindowWidget } from "../../components/widgets/initial-ai-window-widget/initial-ai-window-widget";
import { HistoryChatWidget } from "../../components/widgets/history-chat-widget/history-chat-widget";

@Component({
  selector: 'app-ai-stylist-page',
  imports: [InitialAiWindowWidget, HistoryChatWidget],
  templateUrl: './ai-stylist-page.html',
  styleUrl: './ai-stylist-page.css',
})
export class AiStylistPage {
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

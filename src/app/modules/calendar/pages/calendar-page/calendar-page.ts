import { ChangeDetectionStrategy, Component } from '@angular/core';
import {TuiHint} from '@taiga-ui/core';
import { MatIcon } from "@angular/material/icon";
import {TuiDay} from '@taiga-ui/cdk';
import {TuiCalendar} from '@taiga-ui/core';

@Component({
  selector: 'app-calendar-page',
  imports: [
    TuiHint,
    MatIcon,
    TuiCalendar,
  ],
  templateUrl: './calendar-page.html',
  styleUrl: './calendar-page.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CalendarPage {
  dayOutfits = [
    {
      textDate: 'Сегодня',
      date: '16.01.2026',
      image: 'https://i.pinimg.com/1200x/56/9b/ac/569bac460767c807c83be1243c4ec4d8.jpg',
      name: 'Название 1',
      cost: 'Стоимость 1'
    },
    {
      textDate: 'Завтра',
      date: '17.01.2026',
      image: 'https://i.pinimg.com/736x/64/09/e8/6409e8535fb9658d9598b189f8794b75.jpg',
      name: 'Название 2',
      cost: 'Стоимость 2'
    },
  ]

  dayWeather = {
    weather: {
      iconName: 'cloud',
      weatherConditions: 'Солнечная погода',
      temperature: '+ 5 °C'
    },
    outfit: {
      date: 'Наряд под погоду',
      image: 'https://i.pinimg.com/736x/64/09/e8/6409e8535fb9658d9598b189f8794b75.jpg',
      name: 'Название 2',
      cost: 'Стоимость 2'
    }
  }

  selDate: string = "";

  onDayClick(day: TuiDay): void {
    this.selDate = `${day.day}.${day.month < 9 ? '0': ''}${day.month+1}.${day.year}`;
    console.log(this.selDate);
  }
}

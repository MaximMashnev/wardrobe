import { Component} from '@angular/core';
import { TuiTextfieldComponent } from "@taiga-ui/core";
import { TuiTextarea } from '@taiga-ui/kit';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'initial-ai-window-widget',
  imports: [
    TuiTextfieldComponent,
    TuiTextarea,
    FormsModule
  ],
  templateUrl: './initial-ai-window-widget.html',
  styleUrl: './initial-ai-window-widget.css',
})
export class InitialAiWindowWidget {
  chatMessage: string = "";
}

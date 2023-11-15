import { Component} from '@angular/core';
import { Story } from '../interfaces/story';

@Component({
  selector: 'app--main-page',
  templateUrl: './main-page.component.html'
})

export class MainPageComponent {
  public title: string = 'Stories Feed';
}

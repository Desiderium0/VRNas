import { Component } from '@angular/core';
import { HeaderComponent } from "../../header/header.component";
import { FirstBlockComponent } from './Components Child/first-block/first-block.component';

@Component({
  selector: 'Homepage',
  imports: [HeaderComponent, FirstBlockComponent],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss'
})
export class HomePageComponent {

}

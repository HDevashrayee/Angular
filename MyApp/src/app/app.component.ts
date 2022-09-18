import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
/*   template:`
  <app-servers></app-servers>
  <app-servers></app-servers>
  `, */
  templateUrl: './app.component.html',
  //styleUrls: ['./app.component.css']
  styles:[`
    h3{
      color:dodgerblue;
    }
  `]
})
export class AppComponent {
}

import { Component } from '@angular/core';

var myVar: string;

function myFunc(msg: string): string {
  return 'test' + msg;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
}

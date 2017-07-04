import { Component } from '@angular/core';

var myVar: string;

function myFunc(msg: string): string {
  return 'test' + msg;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  // "styles": [
  //   "./node_modules/bootstrap/dist/css/bootstrap.min.css",
  //   "styles.css"
  // ],
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app works!';

  performSearch(searchTerm: HTMLInputElement): void {
    alert('button click' + `${searchTerm.value}`);
  }
}

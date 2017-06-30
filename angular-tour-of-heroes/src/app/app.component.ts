import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `<h1>Hello {{name}}</h1>`,
})
export class AppComponent  {
  name = 'Angular';
  title = 'Tour of Hero';
  hero = 'Windstorm';
}

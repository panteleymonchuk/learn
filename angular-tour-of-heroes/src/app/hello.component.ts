import { Component } from '@angular/core';

@Component({
    selector: 'hello',
    template: `<h1>{{title}}</h1>`,
})
export class HelloComponent {
    title = 'hello';
}
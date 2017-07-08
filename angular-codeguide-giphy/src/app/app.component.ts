import {Component} from '@angular/core';
import {Http, Response} from '@angular/http';
// import {NgFor} from '@angular/common';

@Component({
    moduleId: module.id,
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    title = 'Welcome to GiphySearch';
    link = 'https://api.giphy.com/v1/gifs/search?api_key=15110f24178d425e90bb0bd32559b6f5&limit=25&offset=0&rating=G&lang=en&q=';
    // link = 'http://api.giphy.com/v1/gifs/search?api_key=dc6zaTOxFJmzC&q=';
    http: Http;
    giphes = [];


    constructor(http: Http) {
        this.http = http;
    }

    performSearch(searchTerm: HTMLInputElement): void {
        let apiLink = this.link + searchTerm.value;

        this.http.request(apiLink)
            .subscribe((res: Response) => {
                console.log(this.giphes = res.json().data);
            });
    }
}

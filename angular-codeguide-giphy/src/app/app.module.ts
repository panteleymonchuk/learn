import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';

import {AppComponent} from './app.component';
import {Awesome} from './awesome.component';
import {PhoneList} from './phone-list/phone-list.component';

@NgModule({
    declarations: [
        AppComponent,
        Awesome,
        PhoneList
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}

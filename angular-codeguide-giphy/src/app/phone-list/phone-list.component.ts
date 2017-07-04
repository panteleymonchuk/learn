import {Component, Injectable} from "@angular/core";

@Component({
    selector: "phone-list",
    templateUrl: "phone-list.component.html"
})

@Injectable()
export class PhoneList{

    // constructor(private http: Http) {
    //     var test = this.getJSON().find('item');
    // }
    //
    // public getJSON(): Observable<any> {
    //     return this.http.get("./data/data.json")
    //         .map((res:any) => res.json());
    // }
    // name: string = 'name';
}

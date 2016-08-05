import { Component, OnInit } from '@angular/core';
import {WidgetComponent} from './Framework/widget.Component';

@Component({
    moduleId: module.id,
    selector: 'pledge-app',
    template: `<h1>{{name}} Platform </h1>
                <widget></widget> `,
    directives: [WidgetComponent]
})
export class AppComponent implements OnInit {

    ngOnInit() {

    }
    constructor() { }
    name: string = 'Fraedom';
}
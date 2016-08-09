import { Component } from '@angular/core';
import {HeaderComponent} from './header.component';

@Component({
    selector: 'widget',
    templateUrl: 'app/framework/widget.component.html',
    directives:[HeaderComponent]
})

export class WidgetComponent  {

 title = 'First Widget';

}

// export interface IWidget {
//     title: string;
// }
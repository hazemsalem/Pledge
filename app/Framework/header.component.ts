import { Component } from '@angular/core';

@Component({
 
    selector: 'fraedomheader',
    template: '<h2 class="panel-title">{{header}}</h2>'
})

export class HeaderComponent  {

 header = 'Manage Credit Card';

}

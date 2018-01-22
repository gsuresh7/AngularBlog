import { Component,Input } from '@angular/core';


@Component({
  selector: 'bc-sidenav',
  templateUrl: './sidenav.component.html'
 
})
export class SidenavComponent { 
   @Input() open = false;
}

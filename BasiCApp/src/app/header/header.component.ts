import { Component, EventEmitter, Output } from '@angular/core';




@Component({
  selector : 'app-header',
  templateUrl : './header.component.html'
})
export class HeaderComponent {

  @Output() loadedfeature =new EventEmitter<string>();
 
  onselect(featured : string)
  {
     this.loadedfeature.emit(featured);
  }


}
import { Component, EventEmitter, Output } from '@angular/core';
import { DataStorageService } from '../shared/data-storage.service';




@Component({
  selector : 'app-header',
  templateUrl : './header.component.html'
})
export class HeaderComponent {


  constructor(private datastorage : DataStorageService){}

  //@Output() loadedfeature =new EventEmitter<string>();
 
  /*onselect(featured : string)
  {
     this.loadedfeature.emit(featured);
  }*/

  onstorereceipe(){
    this.datastorage.storeercepise();
  }


}
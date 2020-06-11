import { Component } from '@angular/core';
import agenciesJSON from './agencies-data.json';

@Component({
  selector: 'bcp-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'prueba-frontend-BCP';

  constructor() {
    this.init_localstorage();
  }

  init_localstorage(){

    if(localStorage.getItem("agencies")) {
    
      let agencies = localStorage.getItem("agencies");
    
    }else {

      localStorage.setItem("agencies",JSON.stringify(agenciesJSON));

      let agencies = localStorage.getItem("agencies");
    }

  }
}

import { Component, OnInit } from '@angular/core';
import { ScreenOrientation } from '@ionic-native/screen-orientation/ngx';



@Component({
  selector: 'menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {

  constructor(public screenOrientacion: ScreenOrientation
  ) {
    // Bloqueo la pantalla de forma horizontal    
    this.screenOrientacion.lock(this.screenOrientacion.ORIENTATIONS.LANDSCAPE);
  }

  ngOnInit() {
  }

}

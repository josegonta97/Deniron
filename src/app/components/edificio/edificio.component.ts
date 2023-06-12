import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'edificio',
  templateUrl: './edificio.component.html',
  styleUrls: ['./edificio.component.scss'],
})
export class EdificioComponent  implements OnInit {
img: string = '';
@Input('imagen') imagen: string = '';

  constructor() { 
    this.img = this.imagen; 
  }

  ngOnInit() {}

}

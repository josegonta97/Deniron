import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cuartel',
  templateUrl: './cuartel.page.html',
  styleUrls: ['./cuartel.page.scss'],
})
export class CuartelPage implements OnInit {
  success: string = '';
  warning: string = '';
  lanzas: string = '1';

  constructor() { }

  ngOnInit() {
  }

  reclutar(){
    this.success = 'Tropas reclutadas'    
    this.warning = ''
  }

  noReclutar(){
    this.success = ''    
    this.warning = 'Recursos insuficientes'
  }

}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mapa',
  templateUrl: './mapa.page.html',
  styleUrls: ['./mapa.page.scss'],
})
export class MapaPage implements OnInit {  
  success: string = '';
  lanzas: string = '1';
  ciudad: string = '';
  usuario: string = '';
  constructor() { 
    
  }
  

  ngOnInit() {
  }

  atacar(){
    this.success = 'El ataque ha sido realizado'
    this.lanzas = '0'
  }

  select(){
    this.ciudad = 'Aldea de holaMundo'
    this.usuario = 'holaMundo'
  }
};

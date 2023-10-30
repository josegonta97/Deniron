import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-castillo',
  templateUrl: './castillo.page.html',
  styleUrls: ['./castillo.page.scss'],
})
export class CastilloPage implements OnInit {
  castilloLevel : number = 1; 
  castilloWood : number = 100; 
  castilloStone : number = 120; 
  castilloMud : number = 130; 

  woodLevel : number = 3; 
  woodWood : number = 100; 
  woodStone : number = 120; 
  woodMud : number = 130; 

  constructor() { }

  ngOnInit() {
  }

  mejorarCastillo(){
    this.castilloLevel+=1;
    this.castilloWood+=80;
    this.castilloStone+=130;
    this.castilloMud+=120;
    
  }

  mejorarWood(){
    this.woodLevel+=1;
    this.woodWood+=50;
    this.woodStone+=90;
    this.woodMud+=80;
    
  }

}

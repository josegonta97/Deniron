export class City {
    id : number;
    cityName : String;
    cityUsername : String;
    barrack : number;
    woodcutter : number;
    mine : number;
    pottery : number;
    wood : number;
    stone : number;
    mud : number;
    sword : number;
    lance : number;
    axe : number;
    swordAmount : number;
    lanceAmount : number;
    axeAmount : number;

    constructor() {
      this.id = 0;
      this.cityName = '';
      this.cityUsername = '';
      this.barrack = 0;
      this.woodcutter = 0;
      this.mine = 0;
      this.pottery = 0;
      this.wood = 0;
      this.stone = 0;
      this.mud = 0;
      this.sword = 0;
      this.lance = 0;
      this.axe = 0;
      this.swordAmount = 0;
      this.lanceAmount = 0;
      this.axeAmount = 0;
    }

    setData(data: any) {
      this.id = data.id;
      this.cityName = data.cityName;
      this.cityUsername = data.cityUsername;
      this.barrack = data.barrack;
      this.woodcutter = data.woodcutter;
      this.mine = data.mine;
      this.pottery = data.pottery;
      this.wood = data.wood;
      this.stone = data.stone;
      this.mud = data.mud;
      this.sword = data.sword;
      this.lance = data.lance;
      this.axe = data.axe;
      this.swordAmount = data.swordAmount;
      this.lanceAmount = data.lanceAmount;
      this.axeAmount = data.axeAmount;
    }

  getData(): any {
    return {
      id: this.id,
      cityName: this.cityName,
      cityUsername: this.cityUsername,
      barrack: this.barrack,
      woodcutter: this.woodcutter,
      mine: this.mine,
      pottery: this.pottery,
      wood: this.wood,
      stone: this.stone,
      mud: this.mud,
      sword: this.sword,
      lance: this.lance,
      axe: this.axe,
      swordAmount: this.swordAmount,
      lanceAmount: this.lanceAmount,
      axeAmount: this.axeAmount
    };
  }

    // Getter para la propiedad 'wood'
  getWood(): number {
    return this.wood;
  }

  // Getter para la propiedad 'stone'
  getStone(): number {
    return this.stone;
  }

  // Getter para la propiedad 'mud'
  getMud(): number {
    return this.mud;
  }


    
}
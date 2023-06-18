export interface City {
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
}

class CityService {
    private cities: City[] = [];

    createCity(city: City) {
        this.cities.push(city);
        console.log('Nueva ciudad creada:', city);
    }
  
    updateCity(city: City) {
        const existingCity = this.cities.find(c => c.cityName === city.cityName);
        if (existingCity) {
          Object.assign(existingCity, city);
          console.log('Ciudad actualizada:', existingCity);
        } else {
          console.log('La ciudad no existe:', city);
        }
      }
    
      getCity(cityName: string): City | undefined {
        return this.cities.find(c => c.cityName === cityName);
      }
  }
  
  // Utilizando la interfaz en otra clase
  export class CityController {
    private cityService: CityService;
  
    constructor(cityService: CityService) {
      this.cityService = cityService;
    }
  
    createNewCity() {
      const newCity: City = {
        id : 0,
        cityName: 'Ciudad Nueva',
        cityUsername: 'usuario123',
        barrack: 1,
        woodcutter: 1,
        mine: 1,
        pottery: 1,
        wood: 100,
        stone: 200,
        mud: 50,
        sword: 1,
        lance: 1,
        axe: 0,
        swordAmount: 0,
        lanceAmount: 0,
        axeAmount: 0,
      };
  
      this.cityService.createCity(newCity);
    }
  }
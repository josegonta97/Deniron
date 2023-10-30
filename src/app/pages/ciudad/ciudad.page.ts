import { Component, OnInit } from '@angular/core';
import { City } from 'src/app/models/city';
import { ApiService } from 'src/app/services/api.service';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

@Component({
  selector: 'app-ciudad',
  templateUrl: './ciudad.page.html',
  styleUrls: ['./ciudad.page.scss'],
})
export class CiudadPage implements OnInit {  
  city: City = new City();
  wood: number = 300;
  stone: number = 300;
  mud: number = 300;

  constructor(private apiService: ApiService) {  
    
    
  }

  ngOnInit() {
    this.apiService.getCity(1).subscribe(
      (response: any) => {
        this.city.setData(response);
        this.wood = this.city.wood;
        this.stone = this.city.stone;
        this.mud = this.city.mud;
        console.log('Wood:', this.city.wood);
        console.log('Stone:', this.city.stone);
        console.log('Mud:', this.city.mud);
      },
      (error: any) => {
        console.log('Error:', error);
      }
    );
  }
}



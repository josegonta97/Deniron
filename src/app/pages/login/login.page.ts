import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ScreenOrientation } from '@awesome-cordova-plugins/screen-orientation/ngx';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { City } from 'src/app/models/city';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  username : string = '';
  password : string = '';
  error: string = '';

  constructor(private screenOrientation: ScreenOrientation, private apiService: ApiService, private router: Router) {
    // get current
    console.log(this.screenOrientation.type); // logs the current orientation, example: 'landscape'

    // set to landscape
    this.screenOrientation.lock(this.screenOrientation.ORIENTATIONS.LANDSCAPE);
    
    
  }

  ngOnInit() {
  }

  login() {    
      this.apiService.getUser(this.username).subscribe(
      (response) => {
        // Aquí puedes procesar la respuesta del servidor
        console.log(response);
        this.getCitybyUser(this.username).subscribe(
          (city) => {
            console.log(city);
            this.router.navigate(['/ciudad']);
          },
          (error) => {
            this.error = 'Carga fallida';
            console.error(error);
          }
        );
        this.router.navigate(['/ciudad']);        
      },
      (error) => {          
        this.error = 'Usuario o contraseña incorrectos';
        // Aquí puedes manejar cualquier error que ocurra
        console.error(error);
      }
      );
  }

  getCitybyUser(username: string): Observable<City> {
    const city = new City(); // Crear una instancia de City
  
    return this.apiService.getCitybyUser(username)
      .pipe(
        map((response: any) => {
          city.setData(response); // Asignar los datos a la instancia de City
          return city;
        }),
        catchError((error: any) => {
          console.error(error);
          return throwError(error);
        })
      );

}


}

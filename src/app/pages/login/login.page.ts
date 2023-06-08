import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ScreenOrientation } from '@awesome-cordova-plugins/screen-orientation/ngx';
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
        this.router.navigate(['/ciudad']);
      },
      (error) => {
        this.error = 'Usuario o contraseña incorrectos';
        // Aquí puedes manejar cualquier error que ocurra
        console.error(error);
      }
      );
  }

}

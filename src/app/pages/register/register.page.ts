import { Component, OnInit } from '@angular/core';
import { City } from 'src/app/models/city';
import { User } from 'src/app/models/user';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  email : string = '';
  username : string = '';
  password : string = '';
  error: string = '';
  router: any;

  constructor(private apiService: ApiService) { }

  ngOnInit() {
  }

  register() {    

    const user: User = {
      username: this.username,
      password: this.password,
      email: this.email,
    };
    const city: City = {
      id: 0,
      cityName : 'Pueblo de ' + this.username,
      cityUsername : this.username,
      barrack : 0,
      woodcutter : 0,
      mine : 0,
      pottery : 0,
      wood : 200,
      stone : 200,
      mud : 200,
      sword : 1,
      lance : 1,
      axe : 0,
      swordAmount : 0,
      lanceAmount : 0,
      axeAmount : 0,
    };


    //Llamadas al CRUD de spring
    //Crear usuario
    this.apiService.createUser(user).subscribe(
    (response) => {
      console.log(response);      
    },
    (error) => {          
      this.error = 'Email, usuario o contraseña no validos';
      console.error(error);
    }
    );

    //Crear ciudad
    this.apiService.createCity(city).subscribe(
      (response) => {
        console.log('Se ha creado la ciudad');
        this.router.navigate(['../ciudad']);
      },
      (error) => {    
        this.error = 'No se ha podido establecer conexion';
        console.error(error);
      }
      );
}

}

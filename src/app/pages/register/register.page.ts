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
  success: string = '';
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
    


    //Llamadas al CRUD de spring
    //Crear usuario
    this.apiService.createUser(user).subscribe(
    (response) => {      
      this.success = 'Usuario creado correctamente';
      console.log(response);      
    },
    (error) => {                
      this.success = '';
      this.error = 'Este email ya está siendo utilizado';
      console.error(error);
    }
    );

    //Crear ciudad
    /*
    this.apiService.createCity(city).subscribe(
      (response) => {
        console.log('Se ha creado la ciudad');
        this.router.navigate(['../ciudad']);
      },
      (error) => {    
        this.error = 'No se ha podido establecer conexion';
        console.error(error);
      }
      );*/
}

}

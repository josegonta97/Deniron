import { Component, OnInit } from '@angular/core';
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
    this.apiService.createUser(user).subscribe(
    (response) => {
      // Aquí puedes procesar la respuesta del servidor
      console.log(response);
      this.router.navigate(['../ciudad']);
    },
    (error) => {          
      this.error = 'Email, usuario o contraseña no validos';
      // Aquí puedes manejar cualquier error que ocurra
      console.error(error);
    }
    );
}

}

import { Component } from '@angular/core';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {
  email!: string;
  password!: string;

  constructor(/*private dbService: DbService*/) {}

  login() {
    // Aquí puedes agregar la lógica para autenticar al usuario
    //console.log('Iniciar sesión con correo:', this.email, 'y contraseña:', this.password);    
  }

  

  /*async executeQuery() {
    try {
      const results = await this.dbService.query('SELECT * FROM usu where usucod = '+ this.email);
      console.log('Resultados:', results);
    } catch (error) {
      console.error('Error al ejecutar la consulta:', error);
    }
  }*/
}
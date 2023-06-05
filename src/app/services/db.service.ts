import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { createConnection, Connection } from 'mysql';

@Injectable({
  providedIn: 'root'
})
export class DbService {
  private connection: Connection;

  constructor() {
    this.connection = createConnection(environment.dbConfig);
    this.connection.connect((error: any) => {
      if (error) {
        console.error('Error al conectar a la base de datos:', error);
      } else {
        console.log('Conexión exitosa a la base de datos');
      }
    });
  }

  public query(sql: string): Promise<any> {
    return new Promise((resolve, reject) => {
      this.connection.query(sql, (error: any, results: any) => {
        if (error) {
          reject(error);
        } else {
          resolve(results);
        }
      });
    });
  }
}

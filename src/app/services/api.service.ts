import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/user';
import { City } from '../models/city';


@Injectable({
  providedIn: 'root'
})
export class ApiService {
  

  constructor(private http: HttpClient) { 
  }

  getUser(username: string) {
    return this.http.get(`http://localhost:8080/api/v1/users/${username}`);
  }
  
  createUser(user: User) {
    return this.http.post('http://localhost:8080/api/v1/users', user);
  }
  
  updateUser(userId: number, user: User) {
    return this.http.put(`https://api.example.com/users/${userId}`, user);
  }
  
  deleteUser(userId: number) {
    return this.http.delete(`https://api.example.com/users/${userId}`);
  }

  createCity(city: City) {
    return this.http.post('http://localhost:8080/api/v1/cities', city);
  }
  
}

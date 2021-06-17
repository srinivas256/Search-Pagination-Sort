import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Users} from '../_model/users';

@Injectable({
  providedIn: 'root'
})
export class RestService {

  constructor(private http:HttpClient) { }

  url:string = 'http://localhost:4000/Users';

  getUsers(){
    return this.http.get<Users[]>(this.url);
  }
}

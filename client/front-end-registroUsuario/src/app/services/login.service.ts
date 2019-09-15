import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import {map} from 'rxjs/operators';
import {isNullOrUndefined} from 'util';


@Injectable({
  providedIn: 'root'
})
export class LoginService {

  public url: string;

  constructor(public _http: HttpClient)
  {
    this.url="http://localhost:3000/";
  }

  //Envia la informacion de login a mi ruta api/AppUsers_TB/login
  login(user): Observable<any>
  {
    let json = JSON.stringify(user);
    let headers = new HttpHeaders().set('content-Type','application/json');

    return this._http.post(this.url+'api/AppUsers_TB/login?include=user',json, {headers});
  }

  setUser(user): void
  {
    let user_string = JSON.stringify(user);
    localStorage.setItem("currentUser",user_string);
  }

  setToken(token): void
  {
    localStorage.setItem("accessToken",token);
  }

  getToken()
  {
    return localStorage.getItem("accessToken");
  }

  getCurrentUser()
  {
    let user_string = localStorage.getItem('currentUser');
    if(!isNullOrUndefined(user_string))
    {
      let user = JSON.parse(user_string);

      return user;
    }
    else{
      return null;
    }
  }

  logoutUser()
  {
    let accessToken = localStorage.getItem('accessToken');
    let headers = new HttpHeaders().set('content-Type','application/json');
    const url_api = this.url+'api/AppUsers_TB/logout?access_token='+accessToken;
    localStorage.removeItem('accessToken');
    localStorage.removeItem('currentUser');

    return this._http.post(url_api, {headers});
  }
}

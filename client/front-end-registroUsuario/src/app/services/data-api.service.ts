import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable({
  providedIn: 'root'
})
export class DataApiService {

  public url: string;

  constructor(public _http: HttpClient)
  {
    this.url="http://localhost:3000/";
  }
  //Me retorna los usuarios registrados en mi ruta api/AppUsers_TB/
  getUsers(): Observable<any>
  {
    return this._http.get(this.url+'api/AppUsers_TB/');
  }
  //Envia la informacion de usuario a mi ruta api/AppUsers_TB
  addUser(user): Observable<any>
  {
    let json = JSON.stringify(user);
    let headers = new HttpHeaders().set('content-Type','application/json');

    return this._http.post(this.url+'api/AppUsers_TB',json, {headers});
  }
  //Envia la información de documento a mi ruta api/UsersDocument_TB
  addUserDocument(userDocument):Observable<any>
  {
    let json = JSON.stringify(userDocument);
    let headers = new HttpHeaders().set('content-Type','application/json');

    return this._http.post(this.url+'api/UsersDocument_TB',json, {headers});
  }
  //Envia la informacion de contacto a mi ruta api/Contactinfos_TB
  addContactInfo(contactInfo):Observable<any>
  {
    let json = JSON.stringify(contactInfo);
    let headers = new HttpHeaders().set('content-Type','application/json');

    return this._http.post(this.url+'api/Contactinfos_TB',json, {headers});
  }

}

import { Component, OnInit } from '@angular/core';
import {DataApiService} from 'src/app/services/data-api.service';
import { AppUser_TB } from 'src/app/models/AppUser_TB';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css'],
  providers: [DataApiService]
})
export class RegistroComponent implements OnInit {

  public new_user: any;
  public new_document: any;
  public new_contactInfo: any;
  public fecha: any;
  public id_new_user: any;
  public tipo_de_documento: any;

  constructor(private _DataApiService: DataApiService)
  {
    this.new_user = {
      "LastName": "",
      "Name": "",
      "IsMilitar": true,
      "TimeCreate": "",
      "isTemporal": true,
      "username": "",
      "password": "",
      "email": "",
      "emailVerified": true
    };
    this.new_document={
      "UserID": 0,
      "Document": "",
      "TypeDocumentID": 0,
      "PlaceExpedition": "",
      "DateExpedition": ""
    };
    this.new_contactInfo={
      "UserID": 0,
      "Address": "",
      "CountryID": 0,
      "City": "",
      "Phone": "",
      "CelPhone": "",
      "EmergencyName": "",
      "EmergencyPhone": ""
    };
    this.tipo_de_documento="CC";
  }

  ngOnInit() {
    this.fecha= new Date();
  }

  onSubmit(form)
  {
    this.setEnviarUsuario(form);
  }

  setEnviarUsuario(form)
  {
    this.new_user.TimeCreate = this.fecha;
    this._DataApiService.addUser(this.new_user).subscribe(
      response => {
        this.id_new_user=response.id;
        console.log(this.id_new_user);
        console.log(response);
        this.setEnviarUserDocument();
        this.setEnviarContactInfo();
        form.reset();
      },
      error => {

        console.log(error);
        if(error.status===422)
        {
          alert("Ya hay un usuario registrado con el mismo correo o contraseña");
          form.reset();
        }
        else
        {
          alert("Error, Datos invalidos");
          form.reset();
        }
      }
    );
  }
  setEnviarUserDocument()
  {
    this.new_document.UserID=this.id_new_user;
    this._DataApiService.addUserDocument(this.new_document).subscribe(
      response => {
        console.log(response);
      },
      error => {
        console.log(error);

        alert("Error, Datos invalidos");
      }
    );
  }

  setEnviarContactInfo()
  {
    this.new_contactInfo.UserID=this.id_new_user;
    this._DataApiService.addContactInfo(this.new_contactInfo).subscribe(
      response => {
        console.log(response);
      },
      error => {
        console.log(error);

        alert("Error, Datos invalidos");
      }
    );
  }
}

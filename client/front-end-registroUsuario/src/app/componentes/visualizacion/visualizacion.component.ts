import { Component, OnInit } from '@angular/core';
import {DataApiService} from 'src/app/services/data-api.service';
import {LoginService} from 'src/app/services/login.service';
import { AppUser_TB } from 'src/app/models/AppUser_TB';

@Component({
  selector: 'app-visualizacion',
  templateUrl: './visualizacion.component.html',
  styleUrls: ['./visualizacion.component.css'],
  providers: [DataApiService, LoginService]
})
export class VisualizacionComponent implements OnInit {

  //usuarios: any;
  public usuarios: Array<AppUser_TB>;
  public nombre: string;
  constructor(private _DataApiService: DataApiService, private _LoginService: LoginService)
  {
    this.usuarios=[];
    this.nombre= this._LoginService.getCurrentUser().Name;
  }

  ngOnInit()
  {
    this.setUsuarios();
  }

  setUsuarios()
  {
    this._DataApiService.getUsers().subscribe(
      result => {
        for(var i=0; i<result.length;i++)
        {
          this.usuarios.push(new AppUser_TB(result[i].id,result[i].LastName,result[i].Name,
            result[i].IsMilitar,result[i].TimeCreate,result[i].isTemporal,result[i].username,
            '',result[i].email,result[i].emailVerified));
        }
      },
      error => {
        console.log(<any>error);
      }
    );
  }
}

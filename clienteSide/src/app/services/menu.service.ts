import { Injectable } from '@angular/core';
import { Http,Headers } from '@angular/http';
import 'rxjs/add/operator/map';



@Injectable({
  providedIn: 'root'
})
export class MenuService {

  nombreT:any;
  nombreR: any;


  constructor(private http:Http) { }

  //selector de todos los tipos de menu avl

  getTipoMenu(){
    let headers = new Headers();
    headers.append('Content-Type','application/json');
    return this.http.get('http://localhost:3000/restaurantes/Tipo',{headers: headers})
      .map( res => res.json());
  }

  getNombreRes(nombreT){
    let headers = new Headers();
    headers.append('Content-Type','application/json');

    let tipo = {
      "tipo":nombreT
    }

    return this.http.post('http://localhost:3000/restaurantes/resTipo',tipo,{headers: headers})
      .map( res => res.json());
  }

  getMenuRes(nombreR){
    let headers = new Headers();
    headers.append('Content-Type','application/json');
    let nombre = {
      	"nombreRestaurante": nombreR
    }

    return this.http.post('http://localhost:3000/restaurantes/resNom',nombre,{headers: headers})
      .map( res => res.json());

  }

}

import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Subject } from 'rxjs/Subject';

@Injectable({
  providedIn: 'root'
})
export class DatosService {
  //valor para mandar tipo res y regrese info restaurante
  private tipo = new BehaviorSubject<string>('default');
  cast = this.tipo.asObservable();

  //valor para mandar nomre Restaurantes
  // y regrese el menu del restaurante

  private resta = new BehaviorSubject<string>('default');
  cast1 = this.resta.asObservable();

  constructor() { }

  getTipo(newtipo) {
    this.tipo.next(newtipo);
  }

  getResta(newResta) {
    this.resta.next(newResta);
  }

}

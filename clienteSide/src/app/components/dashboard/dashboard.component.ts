import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';
import { MenuService } from '../../services/menu.service';
import { DatosService } from '../../services/datos.service';
import { Router } from '@angular/router'

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})

export class DashboardComponent implements OnInit {

  tiposRes : Object;
  tipoRR : Object;
  resTipo: String;

  constructor(private menuService:MenuService, private router:Router,private datosService:DatosService) { }

  ngOnInit() {
    this.menuService.getTipoMenu().subscribe(Tipo =>{
      this.tiposRes = Tipo.restaurante;
      console.log(this.tiposRes);
    },
    err => {
      console.log("err");
      return false;
    });
  }

  nombreTipo(nombreS){

    let nombreResRes = nombreS;
    let nn = nombreResRes.innerText;
    this.resTipo = nn;
    console.log(this.resTipo)
    this.datosService.getTipo(this.resTipo);
  }

}

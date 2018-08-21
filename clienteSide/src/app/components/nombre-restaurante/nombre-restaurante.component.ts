import { Component, OnInit, Input,Output } from '@angular/core';
import { MenuService } from '../../services/menu.service';
import { DatosService } from '../../services/datos.service';
import { Router } from '@angular/router'

@Component({
  selector: 'app-nombre-restaurante',
  templateUrl: './nombre-restaurante.component.html',
  styleUrls: ['./nombre-restaurante.component.css']
})

export class NombreRestauranteComponent implements OnInit {

  resTipo1 : Object;
  datosRes : Object;
  resNom: String;

  constructor(private menuService:MenuService, private router:Router,private datosService:DatosService) { }

  ngOnInit() {
    document.body.classList.add('bg-menu');

    this.datosService.cast.subscribe(tipo => this.resTipo1 = tipo);
    this.menuService.getNombreRes(this.resTipo1).subscribe(datos => {
      this.datosRes = datos.restaurante[0].restaurante;
      console.log(this.datosRes);
    });
  }

  nombreResFun(nombreR) {
    let nombreRR = nombreR;
    let nom = nombreRR.innerText;
    this.resNom = nom;
    console.log(this.resNom);
    this.datosService.getResta(this.resNom);
  }
}

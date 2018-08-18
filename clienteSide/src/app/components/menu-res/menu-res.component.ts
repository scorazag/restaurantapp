import { Component, OnInit } from '@angular/core';
import { MenuService } from '../../services/menu.service';
import { DatosService } from '../../services/datos.service';
import { Router } from '@angular/router'
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';



@Component({
  selector: 'app-menu-res',
  templateUrl: './menu-res.component.html',
  styleUrls: ['./menu-res.component.css']
})
export class MenuResComponent implements OnInit {

  menR: String;
  menu: Object;
  public carro = [];
  public suma = [];
  public total = 0;

  title: string = 'My first AGM project';
  lat: number ;
  lng: number ;


  constructor(private menuService:MenuService, private router:Router,private datosService:DatosService,private modalService: NgbModal) { }

  ngOnInit() {
    console.log("hola desde men Res")
    this.datosService.cast1.subscribe(resta => this.menR = resta);
    console.log(this.menR);
    this.menuService.getMenuRes(this.menR).subscribe(menuA => {
      this.menu = menuA.restaurante[0].restaurante[0].menu;
      console.log(this.menu);
    });

    this.getUserLocation()
  }

  platilloSeleccionado(plat){
    this.carro.push(plat);
    this.suma.push(plat.precioPlatillo);
    console.log("aqui van los precios");
    console.log(this.suma);
    this.total = this.suma.reduce((a,b) => a + b);
    console.log(this.total)
  }

  verCuenta(content){
    this.modalService.open(content,{ centered: true });
    console.log("aqui es la cuenta prro");
    console.log(this.carro);
  }

  private getUserLocation(){
    if(navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(position => {
        this.lat = position.coords.latitude;
        this.lng = position.coords.longitude;
      });
    }
  }

}

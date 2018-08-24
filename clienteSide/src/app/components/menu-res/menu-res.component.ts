import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
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

  user: Object;
  menR: String;
  menu: Object;
  public carro = [];
  public suma = [];
  public total = 0;

  title: string = 'My first AGM project';
  lat: number ;
  lng: number ;


  constructor(private authService:AuthService,private menuService:MenuService, private router:Router,private datosService:DatosService,private modalService: NgbModal) { }

  ngOnInit() {
    document.body.classList.add('bg-menu');
    console.log("hola desde men Res");
    this.authService.getProfile().subscribe(profile =>{
      this.user = profile.user.email;
      console.log(this.user)
    },
    err => {
      console.log("err");
      return false;
    });
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

  confirmar(){

    const historial = {
      email: this.user,
      restaurante: this.menR,
      tipoCompra: "compra",
      total: this.total,
      ticket:this.carro
    }
    console.log(historial);
    this.authService.updateHisto(historial).subscribe(flag => {
      if(flag.ok =1){
        console.log("se se guadro bandita")
        this.router.navigate(['dashboard']);
      } else {
        console.log("salio mal carnal");
      }
    });
  }

}

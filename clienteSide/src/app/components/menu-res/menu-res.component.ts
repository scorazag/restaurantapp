import { Component, OnInit } from '@angular/core';
import { MenuService } from '../../services/menu.service';
import { DatosService } from '../../services/datos.service';
import { Router } from '@angular/router'


@Component({
  selector: 'app-menu-res',
  templateUrl: './menu-res.component.html',
  styleUrls: ['./menu-res.component.css']
})
export class MenuResComponent implements OnInit {

  menR: String;
  menu: Object;

  constructor(private menuService:MenuService, private router:Router,private datosService:DatosService) { }

  ngOnInit() {
    console.log("hola desde men Res")
    this.datosService.cast1.subscribe(resta => this.menR = resta);
    console.log(this.menR);
    this.menuService.getMenuRes(this.menR).subscribe(menuA => {
      this.menu = menuA.restaurante[0].restaurante[0].menu;
      console.log(this.menu);
    });
  }

}

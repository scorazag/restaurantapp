import { Component, OnInit } from '@angular/core';
import { DatosService } from '../../services/datos.service';
import { Router } from '@angular/router'
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-reservacion',
  templateUrl: './reservacion.component.html',
  styleUrls: ['./reservacion.component.css']
})
export class ReservacionComponent implements OnInit {
  resN : String;
  time: any;
  dia:any;
  persona:any;

  constructor(private router:Router,private datosService:DatosService,private modalService: NgbModal) { }

  ngOnInit() {
    this.datosService.cast1.subscribe(resta => this.resN = resta);
    console.log(this.resN);
  }

  mostarReserv(content) {
   this.modalService.open(content, { centered: true });
   console.log(this.time);
   console.log(this.dia);
   console.log(this.persona)
 }

}

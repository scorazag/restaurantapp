import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { DatosService } from '../../services/datos.service';
import { Router } from '@angular/router'
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-reservacion',
  templateUrl: './reservacion.component.html',
  styleUrls: ['./reservacion.component.css']
})
export class ReservacionComponent implements OnInit {

  user: Object;
  resN : String;
  time: any;
  dia:any;
  persona:any;

  constructor(private authService:AuthService,private router:Router,private datosService:DatosService,private modalService: NgbModal) { }

  ngOnInit() {
    document.body.classList.add('bg-menu');
    this.authService.getProfile().subscribe(profile =>{
      this.user = profile.user.email;
      console.log(this.user)
    },
    err => {
      console.log("err");
      return false;
    });
    this.datosService.cast1.subscribe(resta => this.resN = resta);
    console.log(this.resN);
  }

  mostarReserv(content) {
   this.modalService.open(content, { centered: true });
   console.log(this.time);
   console.log(this.dia);
   console.log(this.persona)
 }

 confirmar(){
   const confirmacion = {
       email: this.user,
       restaurante: this.resN,
       tipoCompra: "reservacion",
       personas: this.persona,
       dia:this.dia,
       hora:this.time
   }
   console.log(confirmacion);
   this.authService.updateConfirm(confirmacion).subscribe(flag => {
     if(flag.ok =1){
       console.log("se se guadro bandita")
       this.router.navigate(['dashboard']);
     } else {
       console.log("salio mal carnal");
     }
   });
 }
}

import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router'

@Component({
  selector: 'app-historial',
  templateUrl: './historial.component.html',
  styleUrls: ['./historial.component.css']
})
export class HistorialComponent implements OnInit {
  user:Object;
  compras:Object;
  reservas:Object;

  constructor(private authService:AuthService, private router:Router) { }

  ngOnInit() {
    document.body.classList.add('bg-menu');
    this.authService.getProfile().subscribe(profile =>{
      this.user = profile.user.historial;
      console.log(this.user)
    },
    err => {
      console.log("err");
      return false;
    });
  }

}

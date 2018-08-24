import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router'


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  user : String;
  constructor(private authService:AuthService,private router:Router) { }

  ngOnInit() {
    this.authService.getProfile().subscribe(profile =>{
      this.user = profile.user;
      console.log(this.user)
    },
    err => {
      console.log("err");
      return false;
    });
  }
  onLogoutClick(){
    this.authService.logout();
    console.log("ya se salio el vato que puto no");
    this.router.navigate(['login']);
    return false;
  }
}

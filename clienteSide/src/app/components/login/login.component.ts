import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  email: String;
  password: String;

  constructor(private authService:AuthService, private router:Router) { }

  ngOnInit() {
    document.body.classList.add('bg-log');
  }

  onLoginSubmit() {
    const user = {
      email : this.email,
      password : this.password
    }
    this.authService.authenticateUser(user).subscribe(data => {
      if(data.success){
        this.authService.storeUserData(data.token,data.user);
        this.router.navigate(['dashboard']);//seccion de categorias
      }else{
        this.router.navigate(['login']);
      }
    });
  }

}

import { Component, OnInit } from '@angular/core';
import { ValidateService } from '../../services/validate.service';
import { AuthService } from '../../services/auth.service';
import { FlashMessagesService } from 'angular2-flash-messages';
import { Router } from '@angular/router'

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  name: String;
  email: String;
  password: String;
  celular: String;

  constructor(
    private validateService: ValidateService,
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  onRegisterSubmit(){

    const user = {
      nombre: this.name,
      celular : this.celular,
      email: this.email,
      password: this.password
    }

    if(!this.validateService.validateRegister(user)){
      console.log("LLena todos los campos");
      return false;
    }
    if(!this.validateService.validateEmail(user.email)){
      console.log("El email no es valido");
      return false;
    }
    //registro de usuarios
    this.authService.registerUser(user).subscribe(data => {
      console.log(user)
      if(data.success){
        console.log("usuarioa registrado");
        this.router.navigate(['login']);
      }else{
        console.log("salio mal carnal");
        this.router.navigate(['register']);
      }
    });
  }

}

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes} from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AgmCoreModule } from '@agm/core';


//componentes donde va el contenido
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { HomeComponent } from './components/home/home.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ProfileComponent } from './components/profile/profile.component';
import { NombreRestauranteComponent } from './components/nombre-restaurante/nombre-restaurante.component';

import { ValidateService } from './services/validate.service';
import { AuthService } from './services/auth.service';
import { MenuService } from './services/menu.service';
import { DatosService } from './services/datos.service';
import { FlashMessagesModule } from 'angular2-flash-messages';
import { ReservacionComponent } from './components/reservacion/reservacion.component';
import { MenuResComponent } from './components/menu-res/menu-res.component';


const appRoutes: Routes = [
  {
    path:'', component: HomeComponent
  },
  {
    path:'register', component: RegisterComponent
  },
  {
    path:'login', component: LoginComponent
  },
  {
    path:'dashboard', component: DashboardComponent
  },
  {
    path:'profile', component: ProfileComponent
  },
  {
    path:'nombreRes', component: NombreRestauranteComponent
  },
  {
    path:'reservacion', component: ReservacionComponent
  },
  {
    path:'menuRes', component: MenuResComponent
  }
]

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    DashboardComponent,
    ProfileComponent,
    NombreRestauranteComponent,
    ReservacionComponent,
    MenuResComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes),
    FlashMessagesModule,
    NgbModule.forRoot(),
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCiSbEGCcU7fr2JGVS4xh38kAymBdvHxFU'
    })
  ],
  providers: [ValidateService, AuthService,MenuService,DatosService],
  bootstrap: [AppComponent]
})
export class AppModule { }

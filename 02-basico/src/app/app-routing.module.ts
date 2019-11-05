import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { MensajesComponent } from './pages/mensajes/mensajes.component';
import { UsuarioGuardService } from './guards/usuario-guard.service';

const appRputes: Routes = [
  { path:'', component:LoginComponent },
  { 
    path:'mensajes',
    component:MensajesComponent,
    canActivate: [ UsuarioGuardService ]
   },
  { path:'**', component:LoginComponent },
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRputes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { MensajesComponent } from './pages/mensajes/mensajes.component';

const appRputes: Routes = [
  { path:'', component:LoginComponent },
  { path:'mensajes', component:MensajesComponent },
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

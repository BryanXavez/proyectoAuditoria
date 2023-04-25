import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { CargarRollosComponent } from './cargar-rollos/cargar-rollos.component';
import { AuditoriaComponent } from './auditoria/auditoria.component';



@NgModule({
  declarations: [
    LoginComponent,
    CargarRollosComponent,
    AuditoriaComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[AuditoriaComponent]
})
export class PaginasModule { }

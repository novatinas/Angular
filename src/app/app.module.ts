import { NgModule } from '@angular/core';
import { BrowserModule, Meta } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { RouterModule } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NosotrosComponent } from './nosotros/nosotros.component';
import { ProyectosComponent } from './proyectos/proyectos.component';
import { ContactoComponent } from './contacto/contacto.component';

import { GoogleTagManagerModule } from 'angular-google-tag-manager';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NosotrosComponent,
    ProyectosComponent,
    ContactoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    RouterModule,
    GoogleTagManagerModule.forRoot({
      id: 'GTM-5G2BM9DH' // Cambia esto por tu propio GTM ID
    })
  ],
  providers: [Meta],
  bootstrap: [AppComponent]
})
export class AppModule { }

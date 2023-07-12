import { NgModule } from '@angular/core';
import { BrowserModule, Meta } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';



//  Inicio Carga scripts
import { CargarScriptService } from './cargar-script.service';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NosotrosComponent } from './nosotros/nosotros.component';
// Fin Carga Scripts


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NosotrosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule
  ],
  providers: [Meta],
  bootstrap: [AppComponent],
  
})
export class AppModule { }

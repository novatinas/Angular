import { Component } from '@angular/core';
import { CargarScriptService } from '../cargar-script.service';
import { BrowserModule, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  constructor (private _CargaScripts:CargarScriptService, private metaService:Meta)
  {
    _CargaScripts.Carga(["Header/Header"]);
    
  }
  
  ngOnInit() {
    this.metaService.addTag( { name:'Novatinas.cl',content:"Article Description"});
    this.metaService.addTag({ name: 'viewport', content: 'width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no' });
  }
  
  
}

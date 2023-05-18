import { Component } from '@angular/core';
import { CargarScriptService } from '../cargar-script.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  constructor (private _CargaScripts:CargarScriptService)
  {
    _CargaScripts.Carga(["Header/Header"]);
  }
}

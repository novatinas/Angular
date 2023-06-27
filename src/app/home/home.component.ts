import { Component } from '@angular/core';
import { CargarScriptService } from '../cargar-script.service';
import { BrowserModule, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  constructor (private _CargaScripts:CargarScriptService, private metaService:Meta)
  {
    _CargaScripts.Carga(["Header/Header"]);
    
  }
  
  ngOnInit() {
    this.metaService.addTag( { name:'Novatinas.cl',content:"NovaTinas ofrece el servicio de esmaltado de tinas sin necesidad de quitarlas del lugar. Utilizamos el producto de alta durabilidad Permaglas, proveniente de Estados Unidos 🇺🇸. Nuestro trabajo toma aproximadamente 2 horas, seguido de un presecado de 48 horas. Disfruta de una tina renovada y garantizada por un año. ¡Solicita una cotización a través de WhatsApp enviándonos fotografías del artefacto! Somos líderes en el reesmaltado de una amplia variedad de productos, incluyendo tinas, jacuzzis, lavamanos, vanitorios, lavaplatos, tinas plásticas y más. Contáctanos para obtener una cotización personalizada y transforma tu baño con nuestro servicio de calidad., Novatinas.cl,Esmaltado de tinas, Reesmaltado, Permaglas, Servicio de esmaltado, Tina renovada, Garantía por un año, Esmaltado de jacuzzis, Lavamanos esmaltados, Vanitorios esmaltados, Lavaplatos esmaltados, Tina plástica esmaltada, Cotización personalizada." });

    
    this.metaService.addTags([
      { name: 'keywords', content: 'Novatinas, NovaTinas ofrece el servicio de esmaltado de tinas sin necesidad de quitarlas del lugar. Utilizamos el producto de alta durabilidad Permaglas, proveniente de Estados Unidos 🇺🇸. Nuestro trabajo toma aproximadamente 2 horas, seguido de un presecado de 48 horas. Disfruta de una tina renovada y garantizada por un año. ¡Solicita una cotización a través de WhatsApp enviándonos fotografías del artefacto! Somos líderes en el reesmaltado de una amplia variedad de productos, incluyendo tinas, jacuzzis, lavamanos, vanitorios, lavaplatos, tinas plásticas y más. Contáctanos para obtener una cotización personalizada y transforma tu baño con nuestro servicio de calidad., Novatinas.cl,Esmaltado de tinas, Reesmaltado, Permaglas, Servicio de esmaltado, Tina renovada, Garantía por un año, Esmaltado de jacuzzis, Lavamanos esmaltados, Vanitorios esmaltados, Lavaplatos esmaltados, Tina plástica esmaltada, Cotización personalizada.' },
      { name: 'robots', content: 'index, follow' },
      { name: 'writer', content: 'Julio Caniuñir' },
      { name: 'charset', content: 'UTF-8' }
    ]);
  }
  
  
}

import { Component, OnInit } from '@angular/core';
import { Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.scss']
})
export class ContactoComponent implements OnInit {
  constructor(private metaService: Meta) { }

  ngOnInit() {
    this.metaService.addTags([
      { name: 'description', content: "NovaTinas ofrece el servicio de esmaltado de tinas sin necesidad de quitarlas del lugar. Utilizamos el producto de alta durabilidad Permaglas, proveniente de Estados Unidos 🇺🇸. Nuestro trabajo toma aproximadamente 2 horas, seguido de un presecado de 48 horas. Disfruta de una tina renovada y garantizada por un año. ¡Solicita una cotización a través de WhatsApp enviándonos fotografías del artefacto! Somos líderes en el reesmaltado de una amplia variedad de productos, incluyendo tinas, jacuzzis, lavamanos, vanitorios, lavaplatos, tinas plásticas y más. Contáctanos para obtener una cotización personalizada y transforma tu baño con nuestro servicio de calidad., Novatinas.cl,Esmaltado de tinas, Reesmaltado, Permaglas, Servicio de esmaltado, Tina renovada, Garantía por un año, Esmaltado de jacuzzis, Lavamanos esmaltados, Vanitorios esmaltados, Lavaplatos esmaltados, Tina plástica esmaltada, Cotización personalizada." },
      { name: 'keywords', content: 'Novatinas, NovaTinas ofrece el servicio de esmaltado de tinas sin necesidad de quitarlas del lugar. Utilizamos el producto de alta durabilidad Permaglas, proveniente de Estados Unidos 🇺🇸. Nuestro trabajo toma aproximadamente 2 horas, seguido de un presecado de 48 horas. Disfruta de una tina renovada y garantizada por un año. ¡Solicita una cotización a través de WhatsApp enviándonos fotografías del artefacto! Somos líderes en el reesmaltado de una amplia variedad de productos, incluyendo tinas, jacuzzis, lavamanos, vanitorios, lavaplatos, tinas plásticas y más. Contáctanos para obtener una cotización personalizada y transforma tu baño con nuestro servicio de calidad., Novatinas.cl,Esmaltado de tinas, Reesmaltado, Permaglas, Servicio de esmaltado, Tina renovada, Garantía por un año, Esmaltado de jacuzzis, Lavamanos esmaltados, Vanitorios esmaltados, Lavaplatos esmaltados, Tina plástica esmaltada, Cotización personalizada.' },
      { name: 'robots', content: 'index, follow' },
      { name: 'writer', content: 'Julio Caniuñir' },
      { name: 'charset', content: 'UTF-8' }
    ]);
  }
}

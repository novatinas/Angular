import { Component ,OnInit} from '@angular/core';
import { Meta } from '@angular/platform-browser';
@Component({
  selector: 'app-nosotros',
  templateUrl: './nosotros.component.html',
  styleUrls: ['./nosotros.component.scss']
})
export class NosotrosComponent implements OnInit {
  constructor(private metaService: Meta) { }

  ngOnInit() {
    this.metaService.addTags([
      { name: 'description', content: "NovaTinas ofrece el servicio de esmaltado de tinas sin necesidad de quitarlas del lugar. Utilizamos el producto de alta durabilidad Permaglas, proveniente de Estados Unidos 🇺🇸. Nuestro trabajo toma aproximadamente 2 horas, seguido de un presecado de 48 horas. Disfruta de una tina renovada y garantizada por un año. ¡Solicita una cotización a través de WhatsApp enviándonos fotografías del artefacto! Somos líderes en el reesmaltado de una amplia variedad de productos, incluyendo tinas, jacuzzis, lavamanos, vanitorios, lavaplatos, tinas plásticas y más. Contáctanos para obtener una cotización personalizada y transforma tu baño con nuestro servicio de calidad., Novatinas.cl,Esmaltado de tinas, Reesmaltado, Permaglas, Servicio de esmaltado, Tina renovada, Garantía por un año, Esmaltado de jacuzzis, Lavamanos esmaltados, Vanitorios esmaltados, Lavaplatos esmaltados, Tina plástica esmaltada, Cotización personalizada." },
      {name: 'keywords',content: 'Novatinas, esmaltado de tinas, Permaglas, servicio de esmaltado, tinas renovadas, garantía por un año, esmaltado de jacuzzis, lavamanos esmaltados, vanitorios esmaltados, lavaplatos esmaltados, tinas plásticas esmaltadas, cotización personalizada, servicio de calidad, baño transformado, soluciones de baño, renovación de baño, reesmaltado, esmaltado en Estados Unidos, durabilidad, servicio rápido, líderes en esmaltado, esmaltado de alta calidad, baño nuevo, reacondicionamiento de baño, lavado de tinas, servicio de esmaltado profesional, reesmaltado de alta calidad, esmaltado duradero, mejora del baño, transformación del lavabo, reacondicionamiento del lavabo, remodelación del baño, servicios de baño, especialistas en tinas, renovación de tinas, restauración de tinas, baño de calidad, baño estético, esmaltado de cerámica, servicios de jacuzzi, baño moderno, esmaltado de bañeras'},
      { name: 'robots', content: 'index, follow' },
      { name: 'writer', content: 'Julio Caniuñir' },
      { name: 'charset', content: 'UTF-8' }
    ]);
  }
}

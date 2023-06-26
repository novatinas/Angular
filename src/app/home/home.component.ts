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
    this.metaService.addTag( { name:'Novatinas.cl',content:"Article Description"});

    
    this.metaService.addTags([  
      { name: 'keywords', content: 'Angular SEO Title, Meta Description, Meta Keyword Example' },  
      { name: 'robots', content: 'index, follow' },  
      { name: 'writer', content: 'John Smith' },  
      { charset: 'UTF-8' },  
      {name:"viewport", content:"width=device-width, initial-scale=1.0"}

    ]);  
    

    this.metaService.removeTag('name="writer"');  
  }
  
  
}

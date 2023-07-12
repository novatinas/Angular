import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NosotrosComponent } from './nosotros/nosotros.component';



const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: '#/Nosotros', component: NosotrosComponent }

];
@NgModule({
  imports: [RouterModule.forRoot(routes,{useHash: true} )],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';


const routes: Route[] = [
 
  {path: 'contacto', component: ContactoComponent},

   /*Pagina Principal porue no tiene ruta*/
  {path: '', component: PaginaprincipalComponent},
];

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { MenuComponent } from './menu/menu.component';
import { ContactoComponent } from './contacto/contacto.component';

/*Enrutadores de Navegacion*/
import { RouterModule, Route } from "@angular/router";
import { PaginaprincipalComponent } from './paginaprincipal/paginaprincipal.component';



@NgModule({
  imports:      [ BrowserModule, FormsModule, RouterModule.forRoot(routes)],
  declarations: [ AppComponent, HelloComponent, MenuComponent, ContactoComponent, PaginaprincipalComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }


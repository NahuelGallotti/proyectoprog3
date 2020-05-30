import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { MenuComponent } from './menu/menu.component';
import { ContactoComponent } from './contacto/contacto.component';

/*Enrutadores de Navegacion*/
import { RouterModule, Route } from "@angular/router";

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, HelloComponent, MenuComponent, ContactoComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }

const routes: Route[] = [
 
  
];
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { SimplesComponent } from './simples/simples.component';
import { CompostoComponent } from './composto/composto.component';

import { RouterModule } from '@angular/router';

@NgModule({
  imports:      [ 
    BrowserModule, 
    FormsModule,
    RouterModule.forRoot(
      [
        {path: '', component: HomeComponent},
        {path: 'simples', component: SimplesComponent},
        {path: 'composto', component: CompostoComponent}
      ]
    )
  ],
  declarations: [ AppComponent, HelloComponent, NavbarComponent, HomeComponent, SimplesComponent, CompostoComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }

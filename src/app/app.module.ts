import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgFor, NgIf, UpperCasePipe } from '@angular/common';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeroesComponent } from './heroes/heroes.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';

@NgModule({
declarations: [
AppComponent,
HeroesComponent,
HeroDetailComponent
],
imports: [
BrowserModule,
AppRoutingModule,
FormsModule,
NgFor,
NgIf,
UpperCasePipe
],
providers: [],
bootstrap: [AppComponent]
})

export class AppModule { }


import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { InicioComponent } from './inicio/inicio.component';
import { LoaderComponent } from './loader/loader.component';

import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ProjectsComponent } from './projects/projects.component';
import { HeroComponent } from './hero/hero.component';
import { JourneyComponent } from './journey/journey.component';
import { AbilitiesComponent } from './abilities/abilities.component';
import { BeyondCodeComponent } from './beyond-code/beyond-code.component';
import { ContactComponent } from './contact/contact.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    InicioComponent,
    LoaderComponent,
    PageNotFoundComponent,
    ProjectsComponent,
    HeroComponent,
    JourneyComponent,
    AbilitiesComponent,
    BeyondCodeComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './Components/header/header.component';
import { FooterComponent } from './Components/footer/footer.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule, MatToolbar} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
// import { DummyComponent } from './Components/dummy/dummy.component';
import { HomePageComponent } from './Components/home-page/home-page.component';
import {MatCardModule} from '@angular/material/card';
import {NgImageSliderModule} from 'ng-image-slider';
import { AboutDlcComponent } from './Components/about-dlc/about-dlc.component';
import { OurWorldsComponent } from './Components/our-worlds/our-worlds.component';
import { ExperiencesComponent } from './Components/experiences/experiences.component';
import { GalleryComponent } from './Components/gallery/gallery.component';
import { PressComponent } from './Components/press/press.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    // DummyComponent,
    HomePageComponent,
    AboutDlcComponent,
    OurWorldsComponent,
    ExperiencesComponent,
    GalleryComponent,
    PressComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    NgImageSliderModule     

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }


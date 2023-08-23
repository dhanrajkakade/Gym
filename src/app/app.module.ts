import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { CarouselComponent } from './carousel/carousel.component';
import { ImageGalleryComponent } from './image-gallery/image-gallery.component';
import { PhotoCarouselComponent } from './photo-carousel/photo-carousel.component';
import { TSliderComponent } from './t-slider/t-slider.component';
import { PriceSliderComponent } from './price-slider/price-slider.component';
import { FooterComponent } from './footer/footer.component';
import { NewNavComponent } from './new-nav/new-nav.component';
import { BmiComponent } from './bmi/bmi.component';


@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    CarouselComponent,
    ImageGalleryComponent,
    PhotoCarouselComponent,
    TSliderComponent,
    PriceSliderComponent,
    FooterComponent,
    NewNavComponent,
    BmiComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }

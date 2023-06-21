import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home/home.component';
import { BannerCarouselComponent } from './shared/components/banner-carousel/banner-carousel/banner-carousel.component';
import { LoginHeaderComponent } from './shared/components/login_header/login-header/login-header.component';
import { NavbarComponent } from './shared/components/navbar/navbar/navbar.component';
import { ChildrenCardComponent } from './shared/components/children-card/children-card/children-card.component';
import { ChooseUsComponent } from './shared/components/choose-us/choose-us/choose-us.component';
import { InfrastructureComponent } from './shared/components/infrastructure/infrastructure/infrastructure.component';
import { SchoolComponent } from './shared/components/school/school/school.component';
import { HolidayComponent } from './shared/components/holiday/holiday/holiday.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BannerCarouselComponent,
    LoginHeaderComponent,
    NavbarComponent,
    ChildrenCardComponent,
    ChooseUsComponent,
    InfrastructureComponent,
    SchoolComponent,
    HolidayComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

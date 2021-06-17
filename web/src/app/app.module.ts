import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CvComponent } from './pages/cv/cv.component';
import { HomeComponent } from './pages/home/home.component';
import { ListComponent } from './pages/list/list.component';
import { CvListComponent } from './components/cv-list/cv-list.component';
import { MenuComponent } from './components/menu/menu.component';
import { FormCvComponent } from './pages/form-cv/form-cv.component';
import { AdminComponent } from './pages/admin/admin.component';
import { FooterComponent } from './components/footer/footer.component';
import { BusinessComponent } from './pages/business/business.component';
import { AdMenuComponent } from './components/ad-menu/ad-menu.component';
import { BsmenuComponent } from './components/bsmenu/bsmenu.component';

@NgModule({
  declarations: [
    AppComponent,
    CvComponent,
    HomeComponent,
    ListComponent,
    CvListComponent,
    MenuComponent,
    FormCvComponent,
    AdminComponent,
    FooterComponent,
    BusinessComponent,
    AdMenuComponent,
    BsmenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BanniereComponent } from './Banniere/banniere/banniere.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './MenuFolder/menu/menu.component';
import { FooterComponent } from './FooterFolder/footer/footer.component';
import { ServiceComponent } from './ServiceFolder/service/service.component';
import { ValueComponent } from './valueFolder/value/value.component';
import { TeamComponent } from './TeamFolder/team/team.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    FooterComponent,
    ServiceComponent,
    ValueComponent,
    BanniereComponent,
    TeamComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

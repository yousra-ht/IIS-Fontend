import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from "@angular/core";
import { BanniereComponent } from './Banniere/banniere/banniere.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './MenuFolder/menu/menu.component';
import { FooterComponent } from './FooterFolder/footer/footer.component';
import { ServiceComponent } from './ServiceFolder/service/service.component';
import { ValueComponent } from './valueFolder/value/value.component';
import { TeamComponent } from './TeamFolder/team/team.component';
import { DescriptionComponent } from './ShortDescriptionFolder/description/description.component';
import { CounterComponent } from './CounterFolder/counter/counter.component';
import { PartenrComponent } from './PartnerFolder/partenr/partenr.component';
import { HomeComponent } from './HomeFolder/home/home.component'
import { HttpClientModule } from '@angular/common/http';
import { CarouselComponent } from './Banniere/carousel/carousel.component';
import { AboutComponent } from './AboutFolder/about/about.component';
import { ContactComponent, NgbdModalContact } from './ContactFolder/contact/contact.component';
import { IndexComponent } from './index/index.component';
import { VariableGService } from './variable-g.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BlogComponent } from './BlogFolder/blog/blog.component';
import { DetailedArticleComponent, NgbdModalConfirm } from './BlogFolder/detailed-article/detailed-article.component';
import { OfferComponent } from './OfferFolder/offer/offer.component';
import { DetailedOfferComponent, NgbdModalOffre } from './offerFolder/detailed-offer/detailed-offer.component';
import { SocialIconComponent } from './Banniere/social-icon/social-icon.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
// import {HttpClient} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    FooterComponent,
    ServiceComponent,
    ValueComponent,
    BanniereComponent,
    CounterComponent,
    DescriptionComponent,
    TeamComponent,
    PartenrComponent,
    HomeComponent,
    CarouselComponent,
    AboutComponent,
    ContactComponent,
    IndexComponent,
    BlogComponent,
    DetailedArticleComponent,
    OfferComponent,
    DetailedOfferComponent,
    SocialIconComponent,
    NgbdModalConfirm,
    NgbdModalContact,
    NgbdModalOffre

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,

    // NgbActiveModal,
    // NgbModal 

    // HttpClient

  ],
  entryComponents: [NgbdModalConfirm, NgbdModalContact, NgbdModalOffre],
  providers: [VariableGService],
  bootstrap: [AppComponent,]
})
export class AppModule { }

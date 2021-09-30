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
import { PartenrComponent } from './partnerFolder/partenr/partenr.component';
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

import { SocialIconComponent } from './Banniere/social-icon/social-icon.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DetailedOfferComponent, NgbdModalOffre } from './OfferFolder/detailed-offer/detailed-offer.component';
import { NgbdModalOffre2, SingleoffreComponent } from './OfferFolder/singleoffre/singleoffre.component';

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
    NgbdModalOffre,
    SocialIconComponent,
    NgbdModalConfirm,
    NgbdModalContact,

    SingleoffreComponent,
    NgbdModalOffre2

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
  entryComponents: [NgbdModalConfirm, NgbdModalContact, NgbdModalOffre2],
  providers: [VariableGService],
  bootstrap: [AppComponent,],
  exports: [DetailedOfferComponent],
})
export class AppModule { }

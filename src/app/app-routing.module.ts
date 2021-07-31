import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './HomeFolder/home/home.component';
import { PartenrComponent } from './PartnerFolder/partenr/partenr.component';
import { ServiceComponent } from './ServiceFolder/service/service.component';
import { ContactComponent } from './ContactFolder/contact/contact.component';
import { IndexComponent } from './index/index.component';
import { BlogComponent } from './BlogFolder/blog/blog.component';
import { DetailedArticleComponent } from './BlogFolder/detailed-article/detailed-article.component';

const routes: Routes = [


  { path: '', 
  component: IndexComponent , children : [
   { path:'', component: HomeComponent },
  { path: 'services', component: ServiceComponent },
  { path: 'partenaire', component: PartenrComponent},
  { path: 'contact', component:  ContactComponent },
  { path: 'Blog', component: BlogComponent},
  { path: 'Article', component: DetailedArticleComponent},
  ]},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

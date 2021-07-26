import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './HomeFolder/home/home.component';
import { PartenrComponent } from './PartnerFolder/partenr/partenr.component';
import { ServiceComponent } from './ServiceFolder/service/service.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'services', component: ServiceComponent },
  { path: 'partenaire', component: PartenrComponent},
  


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

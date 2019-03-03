import { NgModule } from '@angular/core';
import { Routes,CanActivate, RouterModule } from '@angular/router';
import { ProfileComponent } from './profile/profile.component';
import { ReportComponent } from './report/report.component';
import { HomeComponent } from './home/home.component';

import { AuthGuardServiceService } from '../auth-guard-service.service';

const routes: Routes = [
{
  path:'homePage', component:HomeComponent,
   canActivate: [AuthGuardServiceService] },
{path:'profile', component:ProfileComponent,
 canActivate: [AuthGuardServiceService]
},
{path:'report', component:ReportComponent,
canActivate: [AuthGuardServiceService]
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule {}

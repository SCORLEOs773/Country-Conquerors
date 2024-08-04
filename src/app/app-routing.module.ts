import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { LoginComponent } from './components/login/login.component';
import { ProfileComponent } from './components/profile/profile.component';
import { ResourcesComponent } from './components/resources/resources.component';
import { TroopsComponent } from './components/troops/troops.component';
import { BuildingsComponent } from './components/buildings/buildings.component';
import { BattleComponent } from './components/battle/battle.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  {
    path: 'dashboard',
    component: DashboardComponent,
  },
  { path: 'profile', component: ProfileComponent },
  {
    path: 'resources',
    component: ResourcesComponent,
  },
  { path: 'troops', component: TroopsComponent },
  {
    path: 'buildings',
    component: BuildingsComponent,
  },
  { path: 'attacks', component: BattleComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: '**', redirectTo: '/login' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

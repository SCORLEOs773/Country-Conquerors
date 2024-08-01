import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from '../app/components/login/login.component';
import { DashboardComponent } from '../app/components/dashboard/dashboard.component';
import { ResourcesComponent } from '../app/components/resources/resources.component';
import { BuildingsComponent } from '../app/components/buildings/buildings.component';
import { TroopsComponent } from '../app/components/troops/troops.component';
import { BattleComponent } from '../app/components/battle/battle.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'resources', component: ResourcesComponent },
  { path: 'buildings', component: BuildingsComponent },
  { path: 'troops', component: TroopsComponent },
  { path: 'battle', component: BattleComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

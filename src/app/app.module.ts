import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from '../app/components/login/login.component';
import { DashboardComponent } from '../app/components/dashboard/dashboard.component';
import { ResourcesComponent } from '../app/components/resources/resources.component';
import { BuildingsComponent } from '../app/components/buildings/buildings.component';
import { TroopsComponent } from '../app/components/troops/troops.component';
import { BattleComponent } from '../app/components/battle/battle.component';
import { ProfileComponent } from './components/profile/profile.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    ResourcesComponent,
    BuildingsComponent,
    TroopsComponent,
    BattleComponent,
    ProfileComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

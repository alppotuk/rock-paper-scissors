import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { AboutComponent } from './pages/about/about.component';
import { GameComponent } from './pages/game/game.component';
import { HomeComponent } from './pages/home/home.component';

const routes: Routes = [
  {path: 'home', component:HomeComponent},
  {path:'', redirectTo: 'home', pathMatch:'full'},
  {path: 'about', component:AboutComponent},
  {path: 'game', component:GameComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

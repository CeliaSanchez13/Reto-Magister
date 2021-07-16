import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { PrincipalComponent } from './components/principal/principal.component';
import { WelcomePageComponent } from './components/welcome-page/welcome-page.component';

const routes: Routes = [
  {path: '', component: WelcomePageComponent},
  {path: 'principal', component: PrincipalComponent},

  //{ path: '**', redirectTo: 'app' } //Pagina por defecto
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

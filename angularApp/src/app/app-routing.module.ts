import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AngularBasicsComponent } from './components/angular-basics/angular-basics.component';
import { AngularIntermediateComponent } from './components/angular-intermediate/angular-intermediate.component';

const routes: Routes = [
  { path: '', redirectTo: 'basics', pathMatch: 'full' },
  { path: 'basics', component: AngularBasicsComponent },
  { path: 'intermediate', component: AngularIntermediateComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

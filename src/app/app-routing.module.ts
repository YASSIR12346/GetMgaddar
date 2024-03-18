import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from 'src/auth/auth.guard';
import { AppComponent } from './app.component';
import { ExerciceComponent } from 'src/Exercice/exercice.component';
import { DashboardComponent } from 'src/dashboard/dashboard.component';
import { GoalComponent } from './goal/goal.component';

const routes: Routes = [
  {
    path: '',
    redirectTo:'dashboard',
    pathMatch: 'full',
  },
  {
    path: 'exercice',
    component: ExerciceComponent,
    canActivate: [AuthGuard],
  },
  {
    path:'dashboard',
    component:DashboardComponent,
    canActivate:[AuthGuard],
  },
  {
    path:'goal',
    component:GoalComponent,
    canActivate:[AuthGuard],
  },
  {
    path: 'auth',
    loadChildren: () => import('../auth/auth.module').then((m) => m.AuthModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

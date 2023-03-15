import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home.component';

const routes: Routes = [
  { path: '', redirectTo: '/home/movie', pathMatch: 'full' },
  {
    path: '', component: HomeComponent, children: [
      { path: 'movie', loadChildren: () => import('./movie/movie.module').then(m => m.MovieModule) }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }

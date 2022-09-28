import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GifDetailsComponent } from './components/gif-details/gif-details.component';
import { GifTableComponent } from './components/gif-table/gif-table.component';

const routes: Routes = [
  {path: 'home', component: GifTableComponent},
  {path: 'gifDetail/:id', component: GifDetailsComponent},
  {path: '', pathMatch: 'full', redirectTo: 'home' },
  {path: '**', pathMatch: 'full', redirectTo: 'home'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

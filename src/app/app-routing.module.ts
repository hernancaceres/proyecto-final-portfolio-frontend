import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './core/shared/component/not-found/not-found.component';

const routes: Routes = [
  { path: '',loadChildren: () => import('./public/public.module').then(m => m.PublicModule) },
  { path: '**', component: NotFoundComponent, },
  { path: '',loadChildren: () => import('./audio/audio.module').then(m => m.AudioModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
 
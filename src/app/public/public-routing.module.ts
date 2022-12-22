import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditAcercaDeComponent } from './components/acerca-de/components/edit-acerca-de/edit-acerca-de.component';
import { EditSkillComponent } from './components/circle-prog/components/edit-skill/edit-skill.component';
import { NewSkillComponent } from './components/circle-prog/components/new-skill/new-skill.component';
import { EditeducacionComponent } from './components/educacion/components/edit-educacion/editeducacion.component';
import { NeweducacionComponent } from './components/educacion/components/new-educacion/neweducacion.component';
import { EditExperienciaComponent } from './components/experiencia/components/edit-experiencia/edit-experiencia.component';
import { NewExperienciaComponent } from './components/experiencia/components/new-experiencia/new-experiencia.component';


import { HomeComponent } from './components/home/container/home.component';
import { LoginComponent } from './components/login/containers/login.component';
import { PublicComponent } from './public.component';


const routes: Routes = [
  {
    path: '', component: PublicComponent, children: [
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: 'home', component: HomeComponent },
      { path: 'login', component: LoginComponent },
      { path: 'newedu', component: NeweducacionComponent },
      { path: 'editaredu/:id', component: EditeducacionComponent },
      { path: 'newexp', component: NewExperienciaComponent },
      { path: 'editexp/:id', component: EditExperienciaComponent },
      { path: 'editacercade/:id', component: EditAcercaDeComponent },
      { path: 'newskill', component: NewSkillComponent },
      { path: 'editskill/:id', component: EditSkillComponent },

    ]
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PublicRoutingModule { }

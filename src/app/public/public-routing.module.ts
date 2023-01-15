import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditAcercaDeComponent } from './components/acerca-de/components/edit-acerca-de/edit-acerca-de.component';
import { AcercaDeComponent } from './components/acerca-de/containers/acerca-de.component';
import { EditSkillComponent } from './components/circle-prog/components/edit-skill/edit-skill.component';
import { NewSkillComponent } from './components/circle-prog/components/new-skill/new-skill.component';
import { CircleProgComponent } from './components/circle-prog/containers/circle-prog.component';
import { EditeducacionComponent } from './components/educacion/components/edit-educacion/editeducacion.component';
import { NeweducacionComponent } from './components/educacion/components/new-educacion/neweducacion.component';
import { EducacionComponent } from './components/educacion/containers/educacion.component';
import { EditExperienciaComponent } from './components/experiencia/components/edit-experiencia/edit-experiencia.component';
import { NewExperienciaComponent } from './components/experiencia/components/new-experiencia/new-experiencia.component';
import { ExperienciaComponent } from './components/experiencia/containers/experiencia.component';


import { HomeComponent } from './components/home/container/home.component';
import { LoginComponent } from './components/login/containers/login.component';
import { EditProyectoComponent } from './components/proyectos/components/edit-proyecto/edit-proyecto.component';
import { NewProyectoComponent } from './components/proyectos/components/nuevo-proyecto/new-proyecto.component';
import { ProyectoComponent } from './components/proyectos/containers/proyecto.component';
import { PublicComponent } from './public.component';


const routes: Routes = [
  {
    path: '', component: PublicComponent, children: [
      { path: '', redirectTo: 'acerca', pathMatch: 'full' },
      { path: 'home', component: HomeComponent },
      { path: 'login', component: LoginComponent },
      { path: 'educacion', component: EducacionComponent },
      { path: 'newedu', component: NeweducacionComponent },
      { path: 'editaredu/:id', component: EditeducacionComponent },
      { path: 'experiencia', component: ExperienciaComponent },
      { path: 'newexp', component: NewExperienciaComponent },
      { path: 'editexp/:id', component: EditExperienciaComponent },
      { path: 'acerca', component: AcercaDeComponent },
      { path: 'editacercade/:id', component: EditAcercaDeComponent },
      { path: 'skill', component: CircleProgComponent },
      { path: 'newskill', component: NewSkillComponent },
      { path: 'editskill/:id', component: EditSkillComponent },
      { path: 'proyecto', component: ProyectoComponent },
      { path: 'newproyect', component: NewProyectoComponent },
      { path: 'editproyecto/:id', component: EditProyectoComponent },

    ]
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PublicRoutingModule { }

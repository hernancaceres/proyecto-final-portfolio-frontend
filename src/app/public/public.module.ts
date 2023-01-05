import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PublicRoutingModule } from './public-routing.module';
import { SharedModule } from '../core/shared/shared.module';
import { LoginComponent } from './components/login/containers/login.component';
import { HomeComponent } from './components/home/container/home.component';
import { BannerComponent } from './components/banner/banner.component';
import { HeaderComponent } from './components/header/containers/header.component';
import { PublicComponent } from './public.component';
import { EducacionComponent } from './components/educacion/containers/educacion.component';
import { NeweducacionComponent } from './components/educacion/components/new-educacion/neweducacion.component';
import { EditeducacionComponent } from './components/educacion/components/edit-educacion/editeducacion.component';
import { EducacionService } from './service/educacion.service';
import { ExperienciaService } from './service/experiencia.service';
import { TokenService } from './service/token.service';
import { AuthService } from './service/auth.service';
import { ExperienciaComponent } from './components/experiencia/containers/experiencia.component';
import { NewExperienciaComponent } from './components/experiencia/components/new-experiencia/new-experiencia.component';
import { EditExperienciaComponent } from './components/experiencia/components/edit-experiencia/edit-experiencia.component';
import { FooterComponent } from './components/footer/footer.component';
import { AcercaDeComponent } from './components/acerca-de/containers/acerca-de.component';
import { EditAcercaDeComponent } from './components/acerca-de/components/edit-acerca-de/edit-acerca-de.component';
import { ImageService } from './service/image.service';
import { PersonaService } from './service/persona.service';
import { SkillService } from './service/skill.service';
import { CircleProgComponent } from './components/circle-prog/containers/circle-prog.component';
import { EditSkillComponent } from './components/circle-prog/components/edit-skill/edit-skill.component';
import { NewSkillComponent } from './components/circle-prog/components/new-skill/new-skill.component';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { ProyectoService } from './service/proyecto.service';
import { ProyectoComponent } from './components/proyectos/containers/proyecto.component';
import { NewProyectoComponent } from './components/proyectos/components/nuevo-proyecto/new-proyecto.component';
import { EditProyectoComponent } from './components/proyectos/components/edit-proyecto/edit-proyecto.component';
import { AudioModule } from '../audio/audio.module';




@NgModule({
  declarations: [
    PublicComponent,
    LoginComponent,
    HomeComponent,
    BannerComponent,
    HeaderComponent,
    EducacionComponent,
    NeweducacionComponent,
    EditeducacionComponent,
    ExperienciaComponent,
    FooterComponent,
    NewExperienciaComponent,
    EditExperienciaComponent,
    AcercaDeComponent,
    EditAcercaDeComponent,
    CircleProgComponent,
    EditSkillComponent,
    NewSkillComponent,
    ProyectoComponent,
    NewProyectoComponent,
    EditProyectoComponent
    


  ],
  imports: [
    CommonModule,
    PublicRoutingModule,
    SharedModule,
    NgCircleProgressModule.forRoot({ }),
    AudioModule
  ],
  providers: [
    AuthService,
    TokenService,
    ExperienciaService,
    EducacionService,
    PersonaService,
    ImageService,
    SkillService,
    ProyectoService
    

  ],
})
export class PublicModule { }

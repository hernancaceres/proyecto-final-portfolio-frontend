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


  ],
  imports: [
    CommonModule,
    PublicRoutingModule,
    SharedModule
  ],
  providers: [
    AuthService,
    TokenService,
    ExperienciaService,
    EducacionService,

  ],
})
export class PublicModule { }

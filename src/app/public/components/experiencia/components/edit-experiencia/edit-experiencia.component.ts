import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Experiencia } from 'src/app/core/modele/experiencia';
import { ExperienciaService } from 'src/app/public/service/experiencia.service';
import { ImgService } from 'src/app/public/service/img.service';

@Component({
  selector: 'app-edit-experiencia',
  templateUrl: './edit-experiencia.component.html',
  styleUrls: ['./edit-experiencia.component.css']
})
export class EditExperienciaComponent implements OnInit {

  experiencia: Experiencia = null;

  constructor(
    private experienciaService: ExperienciaService, 
    private activatedRouter: ActivatedRoute,
    private router: Router,
    public imgService: ImgService) { }

  ngOnInit(): void {
      const id = this.activatedRouter.snapshot.params['id'];
      this.experienciaService.detail(id).subscribe(
          data => {
              this.experiencia = data;
          }, err => {
              alert("Error al editar experiencia");
              this.router.navigate(['']);
          }
      )
  }

  onUpdate(): void {
      const id = this.activatedRouter.snapshot.params['id'];
      this.experiencia.imgExp = this.imgService.url
      this.experienciaService.update(id, this.experiencia).subscribe(
          data => {
              this.router.navigate(['']);
          }, err => {
              alert("Error al editar experiencia");
              this.router.navigate(['']);
          }
      )
  }

  uploadImage($event: any) {
    const id = this.activatedRouter.snapshot.params['id'];
    const name = "fotoexperiencia_" + id;
    this.imgService.uploadImage($event, name)

  }

}
 
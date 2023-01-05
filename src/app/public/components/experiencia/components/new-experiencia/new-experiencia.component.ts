import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Experiencia } from 'src/app/core/modele/experiencia';
import { ExperienciaService } from 'src/app/public/service/experiencia.service';
import { ImgService } from 'src/app/public/service/img.service';

@Component({
  selector: 'app-new-experiencia',
  templateUrl: './new-experiencia.component.html',
  styleUrls: ['./new-experiencia.component.css']
})
export class NewExperienciaComponent implements OnInit {

  nombreE: string = '';
  modalidadE: string = '';
  empresaE: string = '';
  fechaInicioExp: string = '';
  fechaFinExp: string = '';
  pais: string = '';
  descripcionE: string = '';
  imgExp: string = '';

  constructor(
    private router: Router,
    private experienciaService: ExperienciaService,
    public imgService: ImgService,
    ) { }

  ngOnInit(): void {
  }

  onCreate(): void {
    const id = Date.now().toString();
    const experiencia = new Experiencia(this.nombreE, this.modalidadE, this.empresaE, this.fechaInicioExp, this.fechaFinExp, this.pais, this.descripcionE, this.imgExp);
    if (!experiencia.imgExp) {
      experiencia.imgExp = this.imgService.url;
    }
    this.experienciaService.save(experiencia).subscribe(
      data => {
        alert("Experiencia añadida");
        this.router.navigate(['']);
      }, err => {
        alert("Falló agregar experiencia");
        this.router.navigate(['']);
      }
    )
  }

  uploadImage($event: any) {
    const id = Date.now().toString();
    this.imgService.uploadImage($event, id);
  }

}
 
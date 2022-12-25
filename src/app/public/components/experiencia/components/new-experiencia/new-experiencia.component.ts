import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Experiencia } from 'src/app/core/modele/experiencia';
import { ExperienciaService } from 'src/app/public/service/experiencia.service';

@Component({
  selector: 'app-new-experiencia',
  templateUrl: './new-experiencia.component.html',
  styleUrls: ['./new-experiencia.component.css']
})
export class NewExperienciaComponent implements OnInit {

  nombreE: string = '';
  descripcionE: string = '';

  constructor(
    private experienciaService: ExperienciaService, 
    private router: Router) { }

  ngOnInit(): void {
  }

  onCreate(): void {
    const experiencia = new Experiencia(this.nombreE, this.descripcionE);
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

}

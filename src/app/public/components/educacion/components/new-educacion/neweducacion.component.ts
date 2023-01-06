import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Educacion } from 'src/app/core/modele/educacion';
import { EducacionService } from 'src/app/public/service/educacion.service';
import { ImgService } from 'src/app/public/service/img.service';

@Component({
  selector: 'app-neweducacion',
  templateUrl: './neweducacion.component.html',
  styleUrls: ['./neweducacion.component.css']
})
export class NeweducacionComponent implements OnInit {
  nombreEdu: string;
  institucionEdu: string;
  carreraEdu: string;
  fechaInicioEdu: string;
  fechaFinEdu: string;
  paisEdu: string;
  descripcionEdu: string;
  imgEdu: string = '';

  constructor(
    private educacionS: EducacionService, 
    private router: Router,
    public imgService: ImgService,
    ) { }

  ngOnInit(): void {
  }

  onCreate(): void{
    const educacion = new Educacion(this.nombreEdu, this.institucionEdu, this.carreraEdu, this.fechaInicioEdu, this.fechaFinEdu, this.paisEdu, this.descripcionEdu, this.imgEdu);
    if (!educacion.imgEdu) {
      educacion.imgEdu = this.imgService.url;
    }
    this.educacionS.save(educacion).subscribe(
      data =>{
        alert("Educacion añadida correctamente");
        this.router.navigate(['']);
      }, err =>{
        alert("falló");
        this.router.navigate(['']);
      }
    )
  }

  uploadImage($event: any) {
    const id = Date.now().toString();
    this.imgService.uploadImage($event, id);
  }

} 
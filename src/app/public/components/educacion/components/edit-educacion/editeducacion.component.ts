import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Educacion } from 'src/app/core/modele/educacion';
import { EducacionService } from 'src/app/public/service/educacion.service';
import { ImgService } from 'src/app/public/service/img.service';


@Component({
  selector: 'app-editeducacion',
  templateUrl: './editeducacion.component.html',
  styleUrls: ['./editeducacion.component.css']
})
export class EditeducacionComponent implements OnInit {

  educacion: Educacion = null;

  constructor(
    private educacionS: EducacionService,
    private activatedRouter: ActivatedRoute,
    private router: Router,
    public imgService: ImgService,
  ) { }

  ngOnInit(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.educacionS.detail(id).subscribe(
      data => {
        this.educacion = data;
      }, err => {
        alert("Error al modificar");
        this.router.navigate(['educacion']);
      }
    )
  }

  onUpdate(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.educacion.imgEdu = this.imgService.url
    this.educacionS.update(id, this.educacion).subscribe(
      data => {
        this.router.navigate(['educacion']);
      }, err => {
        alert("Error al modificar proyecto");
        this.router.navigate(['educacion']);
      }
    )
  }




  uploadImage($event: any) {
    const id = this.activatedRouter.snapshot.params['id'];
    const name = "fotoeducacion_" + id;
    this.imgService.uploadImage($event, name)

  }

} 
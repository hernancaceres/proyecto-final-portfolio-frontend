import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Experiencia } from 'src/app/core/modele/experiencia';
import { ExperienciaService } from 'src/app/public/service/experiencia.service';
import { ImgService } from 'src/app/public/service/img.service';
import Swal from 'sweetalert2';

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
    private snack: MatSnackBar,
    public dialogRef: MatDialogRef<NewExperienciaComponent>
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
        console.log("paso 2");
        console.log(data);
        Swal.fire("Experiencia añadida", "Experiencia añadida con éxito en el sistema", "success");
        this.router.navigate(['home']);
      }, err => {
        this.snack.open('Ha ocurrido un error en el sistema !!', 'Aceptar', {
          duration: 4000,
          verticalPosition: "top",
          horizontalPosition: "center"
        });
        this.router.navigate(['']);
      }
    )
    this.dialogRef.close();
    console.log("paso 3");
  }

  uploadImage($event: any) {
    const id = Date.now().toString();
    this.imgService.uploadImage($event, id);
  }

}
  
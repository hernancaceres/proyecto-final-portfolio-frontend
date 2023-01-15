import { Component, OnInit } from '@angular/core';

import { MatDialogRef } from '@angular/material/dialog';

import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Educacion } from 'src/app/core/modele/educacion';
import { EducacionService } from 'src/app/public/service/educacion.service';
import { ImgService } from 'src/app/public/service/img.service';
import Swal from 'sweetalert2';


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
    private snack: MatSnackBar,
    public dialogRef: MatDialogRef<NeweducacionComponent>

  ) { }



  ngOnInit(): void {
  }

  onCreate(): void {

      const educacion = new Educacion(this.nombreEdu, this.institucionEdu, this.carreraEdu, this.fechaInicioEdu, this.fechaFinEdu, this.paisEdu, this.descripcionEdu, this.imgEdu);
      if (!educacion.imgEdu) {
        educacion.imgEdu = this.imgService.url;
      }
      this.educacionS.save(educacion).subscribe(
        data => {
          console.log(data);
          Swal.fire("Educacion añadida", "Educación añadida con éxito en el sistema", "success");
          this.router.navigate(['home']);
        }, err => {
          console.log(err);
          this.snack.open('Ha ocurrido un error en el sistema !!', 'Aceptar', {
            duration: 4000,
            verticalPosition: "top",
            horizontalPosition: "center"
          });
          this.router.navigate(['']);
        }
      )
      this.dialogRef.close();
    }
  
  uploadImage($event: any) {
    const id = Date.now().toString();
    this.imgService.uploadImage($event, id);
  }

}   
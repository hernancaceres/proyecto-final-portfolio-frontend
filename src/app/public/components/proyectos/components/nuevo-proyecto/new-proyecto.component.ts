import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';

import { Router } from '@angular/router';
import { Proyecto } from 'src/app/core/modele/proyecto';
import { ImgService } from 'src/app/public/service/img.service';
import { ProyectoService } from 'src/app/public/service/proyecto.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-new-proyecto',
  templateUrl: './new-proyecto.component.html',
  styleUrls: ['./new-proyecto.component.css']
})
export class NewProyectoComponent implements OnInit {

  nombreP: string = '';
  descripcionP: string = '';
  imgP: string = '';

  constructor(

    private router: Router,
    private proyectoService: ProyectoService,
    public imgService: ImgService,
    private snack: MatSnackBar,
    public dialogRef: MatDialogRef<NewProyectoComponent>

  ) {}

  ngOnInit(): void {}

  onCreate(): void {
    const id = Date.now().toString();
    const proyecto = new Proyecto(this.nombreP, this.descripcionP, this.imgP);
    if (!proyecto.imgP) {
      proyecto.imgP = this.imgService.url;
    }
    this.proyectoService.save(proyecto).subscribe(
      data => {
        console.log("paso 2");
        console.log(data);
        Swal.fire("Proyecto creado", "Proyecto creado con éxito en el sistema", "success");
        this.router.navigate(['']);
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
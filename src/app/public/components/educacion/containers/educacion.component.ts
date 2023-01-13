
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Educacion } from 'src/app/core/modele/educacion';
import { EducacionService } from 'src/app/public/service/educacion.service';
import { TokenService } from 'src/app/public/service/token.service';
import { EditeducacionComponent } from '../components/edit-educacion/editeducacion.component';
import { NeweducacionComponent } from '../components/new-educacion/neweducacion.component';

@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.css']
})
export class EducacionComponent implements OnInit {

  educacion: Educacion[] = [];


  constructor(
    private educacionS: EducacionService,
    private tokenService: TokenService,
    private dialog: MatDialog,
    private router: Router

  ) { }

  //comienza dialog nueva educacion
  openDialog() {
    const dialogRef = this.dialog.open(NeweducacionComponent, {
      width: '90%',
      height: '95%',
      
    });
    dialogRef.afterClosed().subscribe(result => {
      this.router.navigate(['educacion']);
    });
  }
  //termina dialog nueva educacion

  //comienza dialog editar
  openEdit(id: number) {
    console.log('ID pasado:', id);  // imprimir el ID en la consola
    const dialogRef = this.dialog.open(EditeducacionComponent, {
      width: '90%',
      height: '95%',
      data: { id: id }  // pasar el id en una propiedad llamada data 
    });
    dialogRef.afterClosed().subscribe(result => {
      this.educacionS.detail(id).subscribe(data => {
        const temp = data;
        let educacion = this.educacion.find(e => e.id === temp.id);
        educacion.nombreEdu = temp.nombreEdu;
        educacion.institucionEdu = temp.institucionEdu;
        educacion.carreraEdu = temp.carreraEdu;
        educacion.fechaInicioEdu = temp.fechaInicioEdu;
        educacion.fechaFinEdu = temp.fechaFinEdu;
        educacion.paisEdu = temp.paisEdu;
        educacion.imgEdu = temp.imgEdu;
        educacion.descripcionEdu = temp.descripcionEdu;

        this.router.navigate(['editaredu/' + id]);
      });
    });
  }

  //termina dialog editar

  isLogged = false;

  ngOnInit() {
    this.educacionS.lista().subscribe(educacion => {
      this.educacion = educacion;
    });
    if (this.tokenService.getToken()) {
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }
  }


  cargarEducacion(): void {
    this.educacionS.lista().subscribe(data => {
      if (data && data.length > 0) {
        this.educacion = data;
      }
    });

  }

  delete(id?: number) {
    if (id != undefined) {
      this.educacionS.delete(id).subscribe(
        data => {
          this.cargarEducacion();
        }, err => {
          alert("No se pudo eliminar");
        }
      )
    }
  }
}

import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Proyecto } from 'src/app/core/modele/proyecto';
import { ProyectoService } from 'src/app/public/service/proyecto.service';
import { TokenService } from 'src/app/public/service/token.service';
import { NewProyectoComponent } from '../components/nuevo-proyecto/new-proyecto.component';

@Component({
  selector: 'app-proyecto',
  templateUrl: './proyecto.component.html',
  styleUrls: ['./proyecto.component.css']
})
export class ProyectoComponent implements OnInit {
  proyecto: Proyecto[] = [];


  constructor(
    public proyectoService: ProyectoService,
    private tokenService: TokenService,
    public dialog: MatDialog,
    private router: Router
    ) { }

  isLogged = false;

  //comienza opendialog
  openDialog() {
    const dialogRef = this.dialog.open(NewProyectoComponent, {
      width: '90%',
      height: '95%',
    });
    dialogRef.afterClosed().subscribe( result => {
      this.router.navigate(['proyecto']);
    });
    console.log("paso 1");
  }
  //termina opendialog

  ngOnInit(): void {
    this.cargarProyecto();
    if (this.tokenService.getToken()) {
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }
  }

  cargarProyecto(): void {
    this.proyectoService.lista().subscribe(data => { this.proyecto = data; })
  }

  delete(id?: number) {
    if (id != undefined) {
      this.proyectoService.delete(id).subscribe(
        data => {
          this.cargarProyecto();
        }, err => {
          alert("No se pudo borrar el proyecto");
        }
      )
    }
  }

}
 
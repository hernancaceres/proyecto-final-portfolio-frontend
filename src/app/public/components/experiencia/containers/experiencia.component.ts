
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Experiencia } from 'src/app/core/modele/experiencia';
import { ExperienciaService } from 'src/app/public/service/experiencia.service';
import { TokenService } from 'src/app/public/service/token.service';
import { EditExperienciaComponent } from '../components/edit-experiencia/edit-experiencia.component';
import { NewExperienciaComponent } from '../components/new-experiencia/new-experiencia.component';


@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.css']
})
export class ExperienciaComponent implements OnInit {


  experiencia: Experiencia[] = [];

  constructor(
    private experienciaService: ExperienciaService,
    private tokenService: TokenService,
    public dialog: MatDialog,
    private router: Router
    ) { }

  //comienza dialog
  openDialog() {
    const dialogRef = this.dialog.open(NewExperienciaComponent, {
      width: '90%',
      height: '95%',
    });
    dialogRef.afterClosed().subscribe( result => {
      this.router.navigate(['experiencia']);
    });
    console.log("paso 1");
    
  }
  //termina dialog
  openEditDialog(id: number): void {
    if(!isNaN(id)){
    const dialogRef = this.dialog.open(EditExperienciaComponent, {
    width: '90%',
    height: '90%',
    data: id
    });
    dialogRef.afterClosed().subscribe( result => {
    this.router.navigate(['experiencia']);
    });
    }else{
    console.log("Id no es un numero");
    }
    }




  isLogged = false;

  ngOnInit(): void {
    this.cargarExperiencia();
    if (this.tokenService.getToken()) {
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }
  }
  
  cargarExperiencia(): void {
    this.experienciaService.lista().subscribe(data => { this.experiencia = data; })
  }

  delete(id?: number) {
    if (id != undefined) {
      this.experienciaService.delete(id).subscribe(
        data => {
          this.cargarExperiencia();
        }, err => {
          alert("No se pudo borrar la experiencia");
        }
      )
    }
  }
}
 

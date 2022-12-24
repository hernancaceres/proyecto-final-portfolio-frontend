import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { Component, OnInit } from '@angular/core';
import { Educacion } from 'src/app/core/modele/educacion';
import { EducacionService } from 'src/app/public/service/educacion.service';
import { TokenService } from 'src/app/public/service/token.service';

@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.css']
})
export class EducacionComponent implements OnInit {

  //comienza toogle
  movies= [''];
  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.movies, event.previousIndex, event.currentIndex);
  }
  //termina toogle

  educacion: Educacion[] = [];

  constructor(
    private educacionS: EducacionService, 
    private tokenService: TokenService) { }
    
  isLogged = false;

  ngOnInit(): void {
    this.cargarEducacion();
    if (this.tokenService.getToken()) {
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }
  }

  cargarEducacion(): void {
    this.educacionS.lista().subscribe(
      data => {
        this.educacion = data;
      }
    )
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
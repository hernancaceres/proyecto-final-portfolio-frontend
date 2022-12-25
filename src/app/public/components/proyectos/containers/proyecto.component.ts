import { Component, OnInit } from '@angular/core';
import { Proyecto } from 'src/app/core/modele/proyecto';
import { ProyectoService } from 'src/app/public/service/proyecto.service';
import { TokenService } from 'src/app/public/service/token.service';

@Component({
  selector: 'app-proyecto',
  templateUrl: './proyecto.component.html',
  styleUrls: ['./proyecto.component.css']
})
export class ProyectoComponent implements OnInit {
  proyecto: Proyecto[]=null;


  constructor(
    public proyectoService: ProyectoService, 
    private tokenService: TokenService) { }

  isLogged = false;

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

  delete(id?: number){
    if(id != undefined){
      this.proyectoService.delete(id).subscribe(
        data => {
          this. cargarProyecto();
        }, err => {
          alert("No se pudo borrar el proyecto");
        }
      )
    }
  }

}
  
import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { Experiencia } from 'src/app/core/modele/experiencia';
import { ExperienciaService } from 'src/app/public/service/experiencia.service';
import { ImgService } from 'src/app/public/service/img.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-edit-experiencia',
  templateUrl: './edit-experiencia.component.html',
  styleUrls: ['./edit-experiencia.component.css']
})
export class EditExperienciaComponent implements OnInit {
  

  experiencia: Experiencia = null; // variable que almacena la experiencia a editar
  

  constructor(
    private experienciaService: ExperienciaService, // servicio para obtener y actualizar experiencias
    private activatedRoute: ActivatedRoute,// para obtener los parametros de la ruta
    private router: Router, // para redirigir al usuario
    public imgService: ImgService, // servicio para subir imágenes
    private snack: MatSnackBar, // para mostrar mensajes temporales
    
    
  ) { }

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.params['id'];
    this.experienciaService.detail(id).subscribe(
      data => {
        this.experiencia = data;
      }, err => {
        alert("Error al modificar");
        this.router.navigate(['']);
      }
    )
  }
  
  onUpdate(): void {
    this.experiencia.imgExp = this.imgService.url
    this.experienciaService.update(this.experiencia.id, this.experiencia).subscribe( // envia los datos actualizados al servicio de experiencias
      data => {
        this.router.navigate(['experiencia']); // redirige al usuario a la página principal
      }, err => {
        alert("Error al editar experiencia"); // alerta en caso de error
        this.router.navigate(['']); // redirige al usuario a la página principal
      }
    )
    
  }


  uploadImage($event: any) {// función llamada al seleccionar una imagen
    
    //const id = this.activatedRouter.params.subscribe(params => params['id']);
    const id = this.activatedRoute.snapshot.params['id']; // obtiene el id de la experiencia
    const name = "fotoexperiencia_" + id; // construye el nombre de la imagen con el formato "fotoexperiencia_<id>"
    this.imgService.uploadImage($event, name) // llama al servicio de imágenes para subir la imagen, pasando el evento de subida de imagen y el nombre de la imagen
  }
  
}

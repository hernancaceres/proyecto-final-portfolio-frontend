import { Component, OnInit } from '@angular/core';
import { Storage, ref, uploadBytes, listAll, getDownloadURL } from '@angular/fire/storage';
import { ActivatedRoute, Router } from '@angular/router';
import { Proyecto } from 'src/app/core/modele/proyecto';
import { ImgService } from 'src/app/public/service/img';
import { ProyectoService } from 'src/app/public/service/proyecto.service';

@Component({
    selector: 'app-new-proyecto',
    templateUrl: './new-proyecto.component.html',
    styleUrls: ['./new-proyecto.component.css']
})
export class NewProyectoComponent implements OnInit {

    nombreP: string = '';
    descripcionP: string = '';
    imgP: string = '';
   
    proyecto: Proyecto=null;

    constructor(
        
        private router: Router,
        private proyectoService: ProyectoService,
        public imgService: ImgService,
        private activatedRouter: ActivatedRoute,) {

    }

    ngOnInit(): void {
    }

    onCreate(): void {
        const proyecto = new Proyecto(this.nombreP, this.descripcionP, this.imgP);
        this.proyectoService.save(proyecto).subscribe(
            data => {
                alert("Proyecto añadido");
                this.router.navigate(['']);
            }, err => {
                alert("Falló agregar proyecto");
                this.router.navigate(['']);
            }
        )
    }

    uploadImage($event: any) {
        const id = this.activatedRouter.snapshot.params['id'];
        const name= "fotoproyecto_" + id;
        this.imgService.uploadImage($event, name)
        
      }

}
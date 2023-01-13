import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Skill } from 'src/app/core/modele/skill';
import { SkillService } from 'src/app/public/service/skill.service';
import { TokenService } from 'src/app/public/service/token.service';
import { EditSkillComponent } from '../components/edit-skill/edit-skill.component';
import { NewSkillComponent } from '../components/new-skill/new-skill.component';

@Component({
  selector: 'app-circle-prog',
  templateUrl: './circle-prog.component.html',
  styleUrls: ['./circle-prog.component.css']
})
export class CircleProgComponent implements OnInit {

  skill: Skill[] = [];
  

  constructor(
    private skillService: SkillService, 
    private tokenService: TokenService,
    public dialog: MatDialog,
    private router: Router
    ) { }

  isLogged = false;

   //comienza opendialog
   openDialog() {
    const dialogRef = this.dialog.open(NewSkillComponent, {
      width: '90%',
      height: '95%',
    });
    dialogRef.afterClosed().subscribe( result => {
      this.router.navigate(['skill']);
    });
    console.log("paso 1");
  }
  //termina opendialog

  //comienza editdialog
   editDialog(id:number) {
    console.log(id);
    const dialogRef = this.dialog.open(EditSkillComponent, {
      width: '90%',
      height: '95%',
      data: id
    });
    dialogRef.afterClosed().subscribe( result => {
      this.router.navigate(['skill']);
    });
    console.log("paso 1");
  }
  //termina editdialog
  
  ngOnInit(): void {
    this.cargarSkills();
    if(this.tokenService.getToken()){
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }
  }

  cargarSkills(): void{
    this.skillService.lista().subscribe(data => { this.skill = data; })
  }

  delete(id: number){
    if(id != undefined){
      this.skillService.delete(id).subscribe(
        data => {
          this.cargarSkills();
        }, err => {
          alert("No se pudo borrar el skill");
        }
      )
    }
  }

}

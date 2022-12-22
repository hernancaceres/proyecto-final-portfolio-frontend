import { Component, OnInit } from '@angular/core';
import { Skill } from 'src/app/core/modele/skill';
import { SkillService } from 'src/app/public/service/skill.service';
import { TokenService } from 'src/app/public/service/token.service';

@Component({
  selector: 'app-circle-prog',
  templateUrl: './circle-prog.component.html',
  styleUrls: ['./circle-prog.component.css']
})
export class CircleProgComponent implements OnInit {

  skill: Skill[] = [];

  constructor(private skillService: SkillService, private tokenService: TokenService) { }
  isLogged = false;
  
  ngOnInit(): void {
    this.cargarSkills();
    if(this.tokenService.getToken()){
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }
  }

  cargarSkills(): void{
    this.skillService.lista().subscribe(
      data => {
        this.skill = data;
      }
    )
  }

  delete(id: number){
    if(id != undefined){
      this.skillService.delete(id).subscribe(
        data => {
          this.cargarSkills();
        }, err => {
          alert("No se pudo borrar la skill");
        }
      )
    }
  }

}

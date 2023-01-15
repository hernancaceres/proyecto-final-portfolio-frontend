import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { Skill } from 'src/app/core/modele/skill';
import { SkillService } from 'src/app/public/service/skill.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-edit-skill',
  templateUrl: './edit-skill.component.html',
  styleUrls: ['./edit-skill.component.css']
})
export class EditSkillComponent implements OnInit {
  skill: Skill = null;
  nombreC: string;
  porcentaje: number;
  
 
  skills: Skill[];
  constructor(
    private skillService: SkillService,
    private activatedRouter: ActivatedRoute,
    private router: Router,
    private snack: MatSnackBar,
    
  ) { }

  ngOnInit(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.skillService.detail(id).subscribe(
      data => {
        this.skill = data;
      }, err => {
        alert("Error al modificar");
        this.router.navigate(['']);
      }
    )
  }

  editDialog(): void {
    this.skillService.lista().subscribe(db => {
      this.skills = db
    });
  }

  onUpdate(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.skillService.update(id, this.skill).subscribe(
      data => {
        this.router.navigate(['skill']);
      }, err => {
        alert("Error al modificar la skill");
        this.router.navigate(['']);
      }
    )

  }

  /* ngOnInit(): void {
  const id = this.activatedRouter.snapshot.params['id'];
  this.skillService.detail(id).subscribe(
    data => {
      this.skill = data;
    }, err => {
      alert("Error al modificar");
      this.router.navigate(['']);
    }
  )
}

onUpdate(): void {
  const id = this.activatedRouter.snapshot.params['id'];
  this.skillService.update(id, this.skill).subscribe(
    data => {
      this.router.navigate(['']);
    }, err => {
      alert("Error al modificar la skill");
      this.router.navigate(['']);
    }
  )
}
*/
}

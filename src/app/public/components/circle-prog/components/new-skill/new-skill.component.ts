import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Skill } from 'src/app/core/modele/skill';
import { SkillService } from 'src/app/public/service/skill.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-new-skill',
  templateUrl: './new-skill.component.html',
  styleUrls: ['./new-skill.component.css']
})
export class NewSkillComponent implements OnInit {
  nombreC: string;
  porcentaje: number;

  constructor(
    private skillS: SkillService, 
    private router: Router,
    private snack: MatSnackBar,
    public dialogRef: MatDialogRef<NewSkillComponent>
    ) { }

  ngOnInit(): void {
  }

  onCreate(): void {
    const id = Date.now().toString();
    const skill = new Skill(this.nombreC, this.porcentaje);
    this.skillS.save(skill).subscribe(
      data => {
        console.log("paso 2");
        console.log(data);
        Swal.fire("Skill creado", "Skill creado con éxito en el sistema", "success");
        this.router.navigate(['home']);
      }, err => {
        this.snack.open('Ha ocurrido un error en el sistema !!', 'Aceptar', {
          duration: 4000,
          verticalPosition: "top",
          horizontalPosition: "center"
        });
        this.router.navigate(['']);
      }
    )
    this.dialogRef.close();
    console.log("paso 3");
  }
}
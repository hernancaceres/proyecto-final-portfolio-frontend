import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { LoginUsuario } from 'src/app/core/modele/login-usuario';
import { AuthService } from 'src/app/public/service/auth.service';
import { TokenService } from 'src/app/public/service/token.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  isLogged = false;
  isLogginFail = false;
  loginUsuario!: LoginUsuario;
  nombreUsuario!: string;
  password!: string;
  roles: string[] = [];
  errMsj!: string;

  constructor(
    private tokenService: TokenService,
    private authService: AuthService,
    private router: Router,
    private snack:MatSnackBar
    ) { }

  ngOnInit(): void {
    if (this.tokenService.getToken()) {
      this.isLogged = true;
      this.isLogginFail = false;
      this.roles = this.tokenService.getAuthorities();
    }
  }

  onLogin(): void {

    if(this.nombreUsuario.trim() == '' || this.nombreUsuario.trim() == null){
      this.snack.open('El nombre de usuario es requerido !!','Aceptar',{
        duration:4000,
        verticalPosition : "top",
        horizontalPosition : "center"
      })
      return;
    }

    if(this.password.trim() == '' || this.password.trim() == null){
      this.snack.open('La contraseña es requerida !!','Aceptar',{
        duration:4000,
        verticalPosition : "top",
        horizontalPosition : "center"
      })
      return;
    }

    this.loginUsuario = new LoginUsuario(this.nombreUsuario, this.password);
    this.authService.login(this.loginUsuario).subscribe(data => {
      this.isLogged = true;
      this.isLogginFail = false;
      this.tokenService.setToken(data.token);
      this.tokenService.setUserName(data.nombreUsuario);
      this.tokenService.setAuthorities(data.authorities);
      this.roles = data.authorities;
      window.location.reload()
      
    }, err => {
      this.isLogged = false;
      this.isLogginFail = true;
      this.errMsj = err.error.mensaje;
      console.log(this.errMsj);

      this.snack.open('Ha ocurrido un error en el sistema !!','Aceptar',{
        duration:4000,
        verticalPosition : "top",
        horizontalPosition : "center"
    })

    })
  }

}
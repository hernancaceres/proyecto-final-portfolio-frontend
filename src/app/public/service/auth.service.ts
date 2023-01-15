import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { JwtDto } from "src/app/core/modele/jwt-dto";
import { LoginUsuario } from "src/app/core/modele/login-usuario";
import { NuevoUsuario } from "src/app/core/modele/nuevo-usuario";
import { environment } from "src/environments/environment";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  URL = 'https://ap2-production.up.railway.app/auth/';

   //URL = 'http://localhost:8080/auth/';

  constructor(private httpClient: HttpClient) { }

  public nuevo(nuevoUsuario: NuevoUsuario): Observable<any> {
    return this.httpClient.post<any>(this.URL + 'nuevo', nuevoUsuario);
  }

  public login(loginUsuario: LoginUsuario): Observable<JwtDto> {
    return this.httpClient.post<JwtDto>(this.URL + 'login', loginUsuario)
  }
}
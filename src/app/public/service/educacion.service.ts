import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Educacion } from "src/app/core/modele/educacion";
import { environment } from "src/environments/environment";

@Injectable({
    providedIn: 'root'
})
export class EducacionService {

     URL = 'http://localhost:8080/educacion/';
    //URL = environment.URL + 'educacion/';
   // URL = 'https://ap2-production.up.railway.app/educacion/';

    constructor(private httpClient: HttpClient) { }

    public lista(): Observable<Educacion[]> {
        return this.httpClient.get<Educacion[]>(this.URL + 'lista');
    }

    public detail(id: number): Observable<Educacion> {
        return this.httpClient.get<Educacion>(this.URL + `detail/${id}`);
    }

    public save(educacion: Educacion): Observable<any> {
        return this.httpClient.post<any>(this.URL + 'create', educacion);
    }

    public update(id: number, educacion: Educacion): Observable<any> {
        return this.httpClient.put<any>(this.URL + `update/${id}`, educacion);
    }

    public delete(id: number): Observable<any> {
        return this.httpClient.delete<any>(this.URL + `delete/${id}`);
    }
}
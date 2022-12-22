export class Skill {
    id: number;
    nombreC: string;
    porcentaje: number;

    constructor(nombreC:string, porcentaje: number){
        this.nombreC = nombreC;
        this.porcentaje = porcentaje;
    }
}
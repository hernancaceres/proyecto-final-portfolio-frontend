export class Educacion {
    id: number;
    nombreE: string; 
    empresaE: string;
    industriaE: string;
    fechaInicioEdu: string;
    fechaFinEdu: string;
    paisEdu: string;
    descripcionE: string;

    constructor(nombreE: string, descripcionE: string,empresaE: string, industriaE: string, fechaInicioEdu: string,fechaFinEdu: string, paisEdu: string)
        
        {
        this.nombreE = nombreE;
        this.empresaE = empresaE;
        this.industriaE = industriaE;
        this.fechaInicioEdu = fechaInicioEdu;
        this.fechaFinEdu = fechaFinEdu;
        this.paisEdu = paisEdu;
        this.descripcionE = descripcionE;
        }
} 
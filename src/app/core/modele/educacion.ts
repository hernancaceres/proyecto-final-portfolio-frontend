export class Educacion {
    id: number;
    nombreEdu: string; 
    institucionEdu: string;
    carreraEdu: string;
    fechaInicioEdu: string;
    fechaFinEdu: string;
    paisEdu: string;
    descripcionEdu: string;
    imgEdu: string;


    constructor(nombreEdu: string, institucionEdu: string, carreraEdu: string, fechaInicioEdu: string,fechaFinEdu: string, paisEdu: string,descripcionEdu: string,imgEdu: string)
        
        {
        this.nombreEdu = nombreEdu;
        this.institucionEdu = institucionEdu;
        this.carreraEdu = carreraEdu;
        this.fechaInicioEdu = fechaInicioEdu;
        this.fechaFinEdu = fechaFinEdu;
        this.paisEdu = paisEdu;
        this.descripcionEdu = descripcionEdu;
        this.imgEdu = imgEdu;
        }
} 
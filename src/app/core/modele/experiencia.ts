export class Experiencia {
    id: number;
    nombreE : string;
    modalidadE: string;
    empresaE: string;
    fechaInicioExp: string;
    fechaFinExp: string;
    pais: string;
    descripcionE : string;
    imgExp: string;

    constructor(nombreE: string, modalidadE: string, empresaE: string, fechaInicioExp: string, fechaFinExp: string, pais: string, descripcionE: string,imgExp: string){
        this.nombreE = nombreE;
        this.modalidadE = modalidadE;
        this.empresaE = empresaE;
        this.fechaInicioExp = fechaInicioExp;
        this.fechaFinExp = fechaFinExp;
        this.pais = pais;
        this.descripcionE = descripcionE;
        this.imgExp = imgExp;
    }
}
import { Injectable } from "@angular/core";
import { Storage, ref, uploadBytes, list, getDownloadURL } from "@angular/fire/storage";

@Injectable({
  providedIn: 'root'
})
export class ImgService {
  url: string = "";
  constructor(private storage: Storage) { }

  public uploadImage($event: any, id: string) {
    const file = $event.target.files[0]
    const imgRef = ref(this.storage, `imgproyecto/${id}`)
    uploadBytes(imgRef, file)
      .then(response => { this.getImages(id) })
      .catch(error => console.log(error))
  }
  

  getImages(name: string) {
    // Crea una referencia a la imagen con el nombre especificado
    const imgRef = ref(this.storage, `imgproyecto/${name}`);
    // Solicita la URL de descarga de la imagen
    getDownloadURL(imgRef)
      .then(url => {
        this.url = url;
        console.log("La url es: " + this.url);
      })
      .catch(error => console.log(error));
  }

} 
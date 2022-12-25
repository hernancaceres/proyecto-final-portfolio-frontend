import { Injectable } from "@angular/core";
import { Storage, ref, uploadBytes, list, getDownloadURL } from "@angular/fire/storage";

@Injectable({
  providedIn: 'root'
})
export class ImgService {
  url: string = "";
  constructor(private storage: Storage) { }

  public uploadImage($event: any, name: string) {
    const file = $event.target.files[0]
    const imgRef = ref(this.storage, `imgproyecto/` + name)
    uploadBytes(imgRef, file)
      .then(response => { this.getImages() })
      .catch(error => console.log(error))
  }

  getImages() {
    const imagesRef = ref(this.storage, 'imgproyecto')
    list(imagesRef)
      .then(async response => {
        for (let item of response.items) {
          this.url = await getDownloadURL(item);
          console.log("La url es: " + this.url);

        }
      })
      .catch(error => console.log(error))
  }

} 
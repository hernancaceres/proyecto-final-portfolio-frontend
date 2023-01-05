import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-audio',
  templateUrl: './audio.component.html',
  styleUrls: ['./audio.component.css']
})
export class AudioComponent implements OnInit {
  audio: HTMLAudioElement;  // Declara una variable para el elemento de audio

  // Indica si el sonido está reproduciéndose o no
  isPlaying = false;

  constructor() { }

  ngOnInit(): void {
    this.audio = new Audio();  // Crea un nuevo elemento de audio
    this.audio.src = '../../assets/audios/AMBIENT-JULIO-2022.mp3';
    this.audio.loop = true;  // Reproducir el audio en un bucle
    this.audio.volume = 0.5;  // Establecer el volumen en 50%
  }

  // Método que se ejecuta cuando se hace clic en el botón de "play"
  playSound() {
    this.audio.currentTime = 0;  // Volver al inicio del audio
    this.audio.play();
    this.isPlaying = true;
  }

  // Método que se ejecuta cuando se hace clic en el botón de "stop"
  stopSound() {
    this.audio.pause();  // Detener la reproducción del audio
    this.isPlaying = false;
  }
}

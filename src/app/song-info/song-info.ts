import { Component } from '@angular/core';

@Component({
  selector: 'app-song-info',
  standalone: false,
  templateUrl: './song-info.html',
  styleUrl: './song-info.css'
})
export class SongInfo {

  constructor(){
    console.log("COMPONENTE SONGINFO CREADO");
  }

  song = {
    cover: "./media/default_img.jpg",
    artist: "ARTISTA 1",
    name: "CANCION 1",
    url: ""

  }

}

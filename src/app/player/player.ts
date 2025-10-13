import { Component } from '@angular/core';

@Component({
  selector: 'app-player',
  standalone: false,
  templateUrl: './player.html',
  styleUrl: './player.css'
})
export class Player {

  song = {
    cover: "https://picsum.photos/200",
    name: "CANCION 1",
    artist: "ARTISTA 1"
  }

  constructor(){
    console.log("COMPONENTE APP CREADO");
  }


}

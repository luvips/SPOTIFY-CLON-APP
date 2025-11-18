import { Component } from '@angular/core';


@Component({
  selector: 'app-player',
  standalone: false,
  templateUrl: './player.html',
  styleUrls: ['./player.css']
})
export class Player {
 
  mainSong = {
    cover: 'https://i.scdn.co/image/ab67616d0000b273c5521a2175333843d759539c',
    name: 'La Diferencia',
    artist: 'Enjambre'
  };


  recentPlayed = [
    {
      cover: 'https://i.scdn.co/image/ab67616d00004851f333e8f8399553752c5259b9',
      name: 'Visita',
      artist: 'Enjambre',
      timeAgo: '2 min ago'
    },
    {
      cover: 'https://i.scdn.co/image/ab67616d000048516a3f7b7643365352b626e75b',
      name: 'Cámara de Faltas',
      artist: 'Enjambre',
      timeAgo: '8 min ago'
    },
    {
      cover: 'https://i.scdn.co/image/ab67616d00004851e219e72656312443f65613ad',
      name: 'Elemento',
      artist: 'Enjambre',
      timeAgo: '24 min ago'
    }
  ];

  constructor() {
    console.log("Reproductor de música cargado con el nuevo diseño.");
  }
}

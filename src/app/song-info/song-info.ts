import { Component, input } from '@angular/core';
import { Song } from '../interfaces/song';

@Component({
  selector: 'app-song-info',
  standalone: false,
  templateUrl: './song-info.html',
  styleUrl: './song-info.css',
  host:{
    '[class.main-content]': 'main_info',
  }
})
export class SongInfo {
  main_info = input(false,{ alias: 'isMainInfo'});
  song = input.required<Song>();

}

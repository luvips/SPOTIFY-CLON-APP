import { Component, OnInit, signal } from '@angular/core';
import { SpotifyLoginService } from './services/spotify-api/spotify-login-service';
import { SpotifyAlbumService } from './services/spotify-api/spotify-album-service';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  standalone: false,
  styleUrl: './app.css'
})
export class App implements OnInit{

  constructor(
    private _spotifyLoginService: SpotifyLoginService,
    private _spotifyAlbumService: SpotifyAlbumService
  ){}

  ngOnInit(): void {
    this._spotifyLoginService.getAccessToken().subscribe(
      (data)=> this._spotifyAlbumService.getAlbum(data.access_token)
        .subscribe(
          (album_data) => console.log(album_data)
        )
      );
    console.log("API TOKEN OBTENIDO")
  }

}

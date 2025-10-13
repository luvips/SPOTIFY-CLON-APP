import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  standalone: false,
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('EXAMPLE_APP');

  constructor(){
    console.log("COMPONENTE APP CREADO");
  }

  view = true;

  destroy(){
    this.view = false;
  }

}

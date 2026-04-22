import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ItemComponent } from './item/item';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ItemComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('price-signal');
}

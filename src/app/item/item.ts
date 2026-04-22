import { Component, computed, effect, signal } from '@angular/core';

@Component({
  selector: 'app-item',
  imports: [],
  templateUrl: './item.html',
  styleUrl: './item.css',
})
export class ItemComponent {
  price = 999;
  quantity = signal(0);
  id = signal(0);
  autoUpdate = signal(false);

  total = computed( () => {
    console.log(`Computed signal: executed`);
    if (this.autoUpdate()) {
      return this.price * this.quantity()
    } else {
      return 0;
    }
  } );

  constructor() {
    effect( () => {
      console.log(`quantity: ${this.quantity()}, total: ${this.total()}, id: ${this.id()}`);
    });
  }

  plus() {
    this.autoUpdate.set(true);
    this.quantity.update(value => value + 1);
    this.id.set(Math.random());
    console.log('Plus button clicked');
  }

  minus() {
    if (this.quantity() > 0) {
      this.autoUpdate.set(true);
      this.quantity.update(value => value - 1);
      this.id.set(Math.random());
      console.log('Minus button clicked');
    }
  }

}

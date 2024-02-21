import { Component } from '@angular/core';
import { ChildComponent } from '../child/child.component';

@Component({
  selector: 'app-parent',
  standalone: true,
  imports: [ChildComponent],
  templateUrl: './parent.component.html',
  styleUrl: './parent.component.css',
})
export class ParentComponent {
  counter: any = 0;

  constructor() {}

  ngOnInit() {}

  incrementCount() {
    this.counter++;
  }

  decrementCount() {
    if (this.counter > 0) this.counter--;
  }
}

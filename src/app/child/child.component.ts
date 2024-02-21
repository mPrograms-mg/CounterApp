import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  standalone: true,
  imports: [],
  templateUrl: './child.component.html',
  styleUrl: './child.component.css',
})
export class ChildComponent {
  @Output() incrementCount = new EventEmitter<void>();
  @Output() decrementCount = new EventEmitter<void>();
  ngOnInit() {}

  increment() {
    // this.couterValue++;
    // this.counterValueAssing = this.couterValue;
    this.incrementCount.emit();
    console.log('COunter...', this.incrementCount);
  }
  decrement() {
    // if (this.couterValue > 0) this.couterValue--;
    // this.counterValueAssing = this.couterValue;
    this.decrementCount.emit();
  }
}

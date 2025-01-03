import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { decrement, increment, reset } from '../store/items.actions';


@Component({
  selector: 'app-counter',
  standalone: true,
  imports: [],
  templateUrl: './counter.component.html'
})
export class CounterComponent {

  title: string = 'Counter usando Redux';

  counter2: number;


  constructor(private store: Store<{count: number}>){
    this.counter2 = 0;
    this.store.select('count').subscribe(counter => {
      this.counter2 = counter;
    })
  }

  increment(): void{
    // this.counter++;
    this.store.dispatch(increment({add: 1}))
    console.log("Incrementando");
  }

  decrement(): void{
    // this.counter--;
    this.store.dispatch(decrement());
    console.log('Decrementando');
  }

  reset(): void{
    // this.counter = 0;
    this.store.dispatch(reset());
    console.log('Reset del contador');
  }
}

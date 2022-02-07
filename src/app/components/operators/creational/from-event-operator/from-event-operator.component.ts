import { Component, OnDestroy, OnInit } from '@angular/core';
import { fromEvent, Subscription } from 'rxjs';

@Component({
  selector: 'app-from-event-operator',
  templateUrl: './from-event-operator.component.html',
  styleUrls: ['./from-event-operator.component.scss']
})
export class FromEventOperatorComponent implements OnInit, OnDestroy {
  stream$ = fromEvent(document, 'click')
  data: number = 0
  subscription!: Subscription

  constructor() {}

  ngOnInit(): void {
    this.subscribeData()
  }

  onClickButton() {
    this.data = 0
  }

  onClickUnsubcribe() {
    if (this.subscription) {
      this.subscription.unsubscribe()
    }
  }

  subscribeData() {
    this.subscription = this.stream$.subscribe((data) => {
      console.log('Has hecho click', data)
      this.data++
    })
  }

  ngOnDestroy(): void {
    if(this.subscription) {
      console.log('💥💥💥 Parece que no te has desuscrito ... ojo! 💥💥💥')
    }
  }
}

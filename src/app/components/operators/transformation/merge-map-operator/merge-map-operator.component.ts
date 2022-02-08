import { Component, OnInit } from '@angular/core';
import { fromEvent, interval, map, mergeMap, Subscription, take, tap } from 'rxjs';

@Component({
  selector: 'app-merge-map-operator',
  templateUrl: './merge-map-operator.component.html',
  styleUrls: ['./merge-map-operator.component.scss']
})
export class MergeMapOperatorComponent implements OnInit {

  data: string[] = []
  initialData: string[] = []
  counter = 0
  subscription!: Subscription

  constructor() {}

  ngOnInit(): void {
    this.observableCreation()
  }

  onClickButton() {
    this.initialData = []
    this.data = []

    if (this.subscription) {
      this.subscription.unsubscribe()
    }
    this.observableCreation()
  }

  observableCreation() {
    const clicks = fromEvent(document, 'click').pipe(
      map(() => {
        this.counter++
        this.initialData = [...this.initialData, 'click ' + this.counter]
        return this.counter
      })
    )

    this.subscription = clicks
      .pipe(
        mergeMap((counter) =>
          interval(1000).pipe(
            take(3),
            tap((data) => {
              this.data = [...this.data, `click ${counter} - ${data}`]
            })
          )
        )
      )
      .subscribe()
  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe()
    }
  }
}

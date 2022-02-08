import { Component, OnDestroy, OnInit } from '@angular/core'
import { fromEvent, interval, map, Subscription, switchAll, tap } from 'rxjs'

@Component({
  selector: 'app-switch-all-operator',
  templateUrl: './switch-all-operator.component.html',
  styleUrls: ['./switch-all-operator.component.scss']
})
export class SwitchAllOperatorComponent implements OnInit, OnDestroy {
  data: string[] = []
  initialData: string[] = []
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
      tap(() => (this.initialData = [...this.initialData, 'click']))
    )
    const source = clicks.pipe(map((ev) => interval(1000)))

    this.subscription = source.pipe(switchAll()).subscribe((x) => {
      this.data = [...this.data, x.toString()]
    })
  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe()
    }
  }
}

import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Subject, Subscription, tap, throttleTime } from 'rxjs';

@Component({
  selector: 'app-throttle-time-operator',
  templateUrl: './throttle-time-operator.component.html',
  styleUrls: ['./throttle-time-operator.component.scss']
})
export class ThrottleTimeOperatorComponent implements OnInit ,OnDestroy {
  data: string[] = []
  initialData: string[] = []

  buttonSource = new Subject<void>();

  subscription!: Subscription
  formControl = new FormControl('', [])

  constructor() {}

  ngOnInit(): void {
    this.subscription = this.buttonSource.pipe(tap(() => [
      this.initialData = [...this.initialData, 'Click on Button']
    ]),throttleTime(1000)).subscribe(() => {
      this.data = [...this.data, 'Play']
    });
  }

  playWithHearth() {
    this.buttonSource.next();
  }

  onClickButton() {
    this.initialData = []
    this.data = []
    this.formControl.reset()
  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe()
    }
  }
}

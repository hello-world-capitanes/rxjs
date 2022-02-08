import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { debounceTime, Subscription, tap } from 'rxjs';

@Component({
  selector: 'app-debounce-time-operator',
  templateUrl: './debounce-time-operator.component.html',
  styleUrls: ['./debounce-time-operator.component.scss']
})
export class DebounceTimeOperatorComponent implements OnInit, OnDestroy {
  data: string[] = []
  initialData: string[] = []
  subscription!: Subscription
  formControl = new FormControl('', [])

  constructor() {}

  ngOnInit(): void {
    this.subscription = this.formControl.valueChanges
      .pipe(
        tap((value) => {
          this.initialData = [...this.initialData, value]
        }),
        debounceTime(500)
      )
      .subscribe((value) => {
        this.data = [...this.data, value]
      })
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

import { Component, OnInit } from '@angular/core';
import { interval, take, tap } from 'rxjs';

@Component({
  selector: 'app-take-operator',
  templateUrl: './take-operator.component.html',
  styleUrls: ['./take-operator.component.scss']
})
export class TakeOperatorComponent implements OnInit {
  data: string[] = []
  initialData: string[] = []

  constructor() {}

  ngOnInit(): void {
    this.createObservable()
  }

  onClickButton() {
    this.initialData = []
    this.data = []
    this.createObservable()
  }

  createObservable() {
    interval(1000)
      .pipe(
        take(5),
        tap((value) => {
          this.initialData = [...this.initialData, value.toString()]
        })
      )
      .subscribe((value) => {
        this.data = [...this.data, value.toString()]
      })
  }
}

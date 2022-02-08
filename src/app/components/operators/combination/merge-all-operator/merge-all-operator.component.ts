import { Component, OnInit } from '@angular/core';
import { interval, map, mergeAll, of, take } from 'rxjs';

@Component({
  selector: 'app-merge-all-operator',
  templateUrl: './merge-all-operator.component.html',
  styleUrls: ['./merge-all-operator.component.scss']
})
export class MergeAllOperatorComponent implements OnInit {
  data: string[] = []
  initialData: string[] = []

  constructor() {}

  ngOnInit(): void {
    this.observableCreation()
  }

  onClickButton() {
    this.initialData = []
    this.data = []

    this.observableCreation()
  }

  observableCreation() {
    const timer1 = interval(1000).pipe(
      take(10),
      map((value) => {
        const text = `Timer 1 emit ${value}`
        this.initialData = [...this.initialData, text]
        return text
      })
    )
    const timer2 = interval(2000).pipe(
      take(6),
      map((value) => {
        const text = `Timer 2 emit ${value}`
        this.initialData = [...this.initialData, text]
        return text
      })
    )
    const timer3 = interval(500).pipe(
      take(10),
      map((value) => {
        const text = `Timer 3 emit ${value}`
        this.initialData = [...this.initialData, text]
        return text
      })
    )

    const source = of(timer1, timer2, timer3)

    source.pipe(mergeAll()).subscribe((x) => {
      this.data = [...this.data, x.toString()]
    })
  }
}

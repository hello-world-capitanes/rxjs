import { Component, OnInit } from '@angular/core';
import { concatAll, interval, map, of, take } from 'rxjs';

@Component({
  selector: 'app-concat-all-operator',
  templateUrl: './concat-all-operator.component.html',
  styleUrls: ['./concat-all-operator.component.scss']
})
export class ConcatAllOperatorComponent implements OnInit {
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

    const source = of(timer1, timer2, timer3);

    source.pipe(concatAll()).subscribe((x) => {
      this.data = [...this.data, x.toString()]
    })
  }
}

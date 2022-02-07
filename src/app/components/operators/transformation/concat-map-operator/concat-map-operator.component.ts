import { Component, OnInit } from '@angular/core';
import { concatMap, fromEvent, interval, map, take, tap } from 'rxjs';

@Component({
  selector: 'app-concat-map-operator',
  templateUrl: './concat-map-operator.component.html',
  styleUrls: ['./concat-map-operator.component.scss']
})
export class ConcatMapOperatorComponent implements OnInit {
  data: string[] = []
  initialData: string[] = []
  counter = 0;

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

    const clicks = fromEvent(document, 'click').pipe(map(() => {
      this.counter++;
      this.initialData = [...this.initialData, 'click ' + this.counter];
      return this.counter;
    }));

    clicks.pipe(concatMap(counter =>
      interval(1000).pipe(
      take(3),
      tap((data) => {
        this.data = [...this.data, `click ${counter} - ${data}` ];
      })
    ))).subscribe();
}

}

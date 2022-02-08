import { Component, OnInit } from '@angular/core';
import { interval, mapTo, take, tap } from 'rxjs';

@Component({
  selector: 'app-map-to-operator',
  templateUrl: './map-to-operator.component.html',
  styleUrls: ['./map-to-operator.component.scss']
})
export class MapToOperatorComponent implements OnInit {
  data: string[] = [];
  initialData:number[] = [];

  constructor() {}

  ngOnInit(): void {
    this.observableCreation();

  };

  onClickButton() {
    this.initialData = [];
    this.data = [];
    this.observableCreation();
  }

  observableCreation() {
    const emitASecuencialNumberEverySecond = interval(1000);
    const takeFourNumbers = emitASecuencialNumberEverySecond.pipe(take(5));
    takeFourNumbers
      .pipe(
        tap((data) => {
          this.initialData = [...this.initialData, data]
        }),
        mapTo('Hey, hey !!!')
      )
      .subscribe(value => {
        this.data = [...this.data, value];
      })

  }
}

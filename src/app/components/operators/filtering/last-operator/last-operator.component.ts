import { Component, OnInit } from '@angular/core';
import { interval, last, take, tap } from 'rxjs';

@Component({
  selector: 'app-last-operator',
  templateUrl: './last-operator.component.html',
  styleUrls: ['./last-operator.component.scss']
})
export class LastOperatorComponent implements OnInit {
  data: string[] = []
  initialData: string[] = []



  constructor() {}

  ngOnInit(): void {
    this.createObservable()
  }

  onClickButton() {
    this.initialData = [];
    this.data = [];
    this.createObservable();

  }

  createObservable() {
    interval(1000).pipe(take(5), tap(value => {
      this.initialData = [...this.initialData, value.toString()];
    }), last()).subscribe((value) => {
        this.data = [...this.data, value.toString()]
  });}
}

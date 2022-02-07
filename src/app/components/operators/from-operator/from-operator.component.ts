import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';

@Component({
  selector: 'app-from-operator',
  templateUrl: './from-operator.component.html',
  styleUrls: ['./from-operator.component.scss']
})
export class FromOperatorComponent implements OnInit {
  initialData = [1, 2, 3, 4]
  stream$ = from(this.initialData)
  data: number[] = []

  constructor() {}

  ngOnInit(): void {
    this.subscribeData()
  }

  onClickButton() {
    this.data = []
    this.subscribeData();
  }

  subscribeData() {
    this.stream$.subscribe((data) => {
      // this.data.push(data) Aquí se puede ver que angular no detecta el cambio
      setTimeout(()=>{
          this.data = [...this.data, data];
        }, (data * 1000));
    });
  }
}

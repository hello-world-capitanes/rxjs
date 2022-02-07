import { Component, OnInit } from '@angular/core';
import { delay, of } from 'rxjs';

@Component({
  selector: 'app-of-operator',
  templateUrl: './of-operator.component.html',
  styleUrls: ['./of-operator.component.scss']
})
export class OfOperatorComponent implements OnInit {
  initialData = [1, 2, 3, 4]
  stream$ = of(this.initialData)
  data: number[] = []

  constructor() {}

  ngOnInit(): void {
    this.subscribeData();
  }

  onClickButton() {
    this.data = [];
    this.stream$ = of(this.initialData);  // Debemos reiniciar el observable porque OF hace un complete
    this.subscribeData();

  }

  subscribeData() {
   this.stream$.pipe(delay(2000)).subscribe((data) => {
     this.data = data
   })
  }
}

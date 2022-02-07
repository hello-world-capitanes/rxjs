import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';

@Component({
  selector: 'app-from-operator',
  templateUrl: './from-operator.component.html',
  styleUrls: ['./from-operator.component.scss']
})
export class FromOperatorComponent implements OnInit {

  initialData = [1,2,3,4];
  stream$ = from(this.initialData);
  data: number[] = [];

  constructor() { }

  ngOnInit(): void {
    this.stream$.subscribe(data => {
      this.data.push(data);
    });
  }

}

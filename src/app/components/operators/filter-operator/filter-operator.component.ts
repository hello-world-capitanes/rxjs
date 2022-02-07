import { Component, OnInit } from '@angular/core';
import { filter, from } from 'rxjs';

@Component({
  selector: 'app-filter-operator',
  templateUrl: './filter-operator.component.html',
  styleUrls: ['./filter-operator.component.scss']
})
export class FilterOperatorComponent implements OnInit {

  initialData = [1,2,3,4];
  stream$ = from(this.initialData);
  data: number[] = [];

  constructor() { }

  ngOnInit(): void {
    this.stream$.pipe(filter(value => value % 2 === 0)).subscribe(data => {
      this.data.push(data);
    });
  }


}

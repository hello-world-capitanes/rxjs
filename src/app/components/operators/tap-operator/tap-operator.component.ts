import { Component, OnInit } from '@angular/core';
import { from, map, tap } from 'rxjs';

@Component({
  selector: 'app-tap-operator',
  templateUrl: './tap-operator.component.html',
  styleUrls: ['./tap-operator.component.scss']
})
export class TapOperatorComponent implements OnInit {

  initialData = [1,2,3,4];
  stream$ = from(this.initialData);
  tapData: number[] = [];
  data: number[] = [];

  constructor() { }

  ngOnInit(): void {
    this.stream$.pipe(
      tap(value => {
        this.tapData.push(value)
      }), map(value => 2*value)
    ).subscribe(data => {
      this.data.push(data);
    });
  }

}

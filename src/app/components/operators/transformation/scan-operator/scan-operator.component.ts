import { Component, OnInit } from '@angular/core';
import { of, scan, tap } from 'rxjs';

@Component({
  selector: 'app-scan-operator',
  templateUrl: './scan-operator.component.html',
  styleUrls: ['./scan-operator.component.scss']
})
export class ScanOperatorComponent implements OnInit {
  data: string[] = []
  initialData: string[] = []

  constructor() {}

  ngOnInit(): void {
    this.observableCreation()
  }

  onClickButton() {
    this.initialData = []
    this.data = []
    setTimeout(() => {
      this.observableCreation();
    }, 2000);
  }

  observableCreation() {
    const stream$ = of('Pera', 'Manzana', 'Naranja');

    stream$.pipe(
      tap(fruit => this.initialData = [...this.initialData, fruit]),
      scan((list, fruit) =>  [...list, fruit]
      , ['']))
      .subscribe((scanResult: string[]) => this.data = [...this.data, '-----------',...scanResult])
  }


}

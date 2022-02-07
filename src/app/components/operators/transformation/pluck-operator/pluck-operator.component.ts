import { Component, OnInit } from '@angular/core';
import { from, pluck, tap } from 'rxjs';

@Component({
  selector: 'app-pluck-operator',
  templateUrl: './pluck-operator.component.html',
  styleUrls: ['./pluck-operator.component.scss']
})
export class PluckOperatorComponent implements OnInit {
  data: string[] = []
  initialData: any[] = []
  initialDataPeople = [
    { name: 'Anakin', lastname: 'Skywalker', age: '19' },
    { name: 'Obi Wan', lastname: 'Kenobi', age: '26' },
    { name: 'Mace', lastname: 'Windu', age: '35' }
  ]

  constructor() {}

  ngOnInit(): void {
    this.observableCreation()
  }

  onClickButton() {
    this.initialData = []
    this.data = []
    setTimeout(() => {
      this.observableCreation()
    }, 2000)
  }

  observableCreation() {
    const stream$ = from(this.initialDataPeople)

    stream$
      .pipe(
        tap(obj => this.initialData = [...this.initialData, obj]),
        pluck('name')
      )
      .subscribe(
        name => this.data = [...this.data, name as string]
      )
  }
}

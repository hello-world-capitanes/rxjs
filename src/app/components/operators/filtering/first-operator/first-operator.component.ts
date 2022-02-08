import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { first, tap } from 'rxjs';

@Component({
  selector: 'app-first-operator',
  templateUrl: './first-operator.component.html',
  styleUrls: ['./first-operator.component.scss']
})
export class FirstOperatorComponent implements OnInit {
  data: string[] = []
  initialData: string[] = []

  formControl = new FormControl('', [])

  constructor() {}

  ngOnInit(): void {
    this.formControl.valueChanges
      .pipe(
        tap((value) => {
          this.initialData = [...this.initialData, value]
        }),
        first(value => value.length > 5)
      )
      .subscribe((value) => {
        this.data = [...this.data, value]
      })
  }

  onClickButton() {
    this.initialData = []
    this.data = []
    this.formControl.reset()
  }
}


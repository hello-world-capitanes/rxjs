import { Component, OnInit } from '@angular/core';
import { buffer, fromEvent, interval, take, tap } from 'rxjs';

@Component({
  selector: 'app-buffer-operator',
  templateUrl: './buffer-operator.component.html',
  styleUrls: ['./buffer-operator.component.scss']
})
export class BufferOperatorComponent implements OnInit {
  data: number[] = []
  initialData: number[] = []

  constructor() {}

  ngOnInit(): void {
    this.observableCreation()
  }

  onClickButton() {
    this.initialData = []
    this.data = []
    this.observableCreation()
  }

  observableCreation() {
    const emitASecuencialNumberEverySecond = interval(1000).pipe(take(30),
        tap((data) => {
          this.initialData = [...this.initialData, data]
        }));

    const clicks = fromEvent(document, 'click');

    emitASecuencialNumberEverySecond.pipe(buffer(clicks)).subscribe(data => {
      this.data = data;
    })
  }
}

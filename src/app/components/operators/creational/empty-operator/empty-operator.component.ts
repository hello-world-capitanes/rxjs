import { Component, OnInit } from '@angular/core';
import { EMPTY } from 'rxjs';

@Component({
  selector: 'app-empty-operator',
  templateUrl: './empty-operator.component.html',
  styleUrls: ['./empty-operator.component.scss']
})
export class EmptyOperatorComponent implements OnInit {

  data: string = '';
  constructor() {}

  ngOnInit(): void {
    this.subscribeData()
  }

  onClickButton() {
    this.data = 'Estoy preparándome';
    setTimeout(()=> {this.subscribeData()}, 5000);

  }

  subscribeData() {

    EMPTY.subscribe({
      next: () => console.log('Next'),
      complete: () => {this.data = "He terminado!!!"}
    })
  }
}

import { Component, EventEmitter, OnInit, Output } from '@angular/core';


@Component({
  selector: 'app-init-button',
  templateUrl: './init-button.component.html',
  styleUrls: ['./init-button.component.scss']
})
export class InitButtonComponent implements OnInit {

  @Output() onClickButton: EventEmitter<void> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  onClick() {
    this.onClickButton.emit();
  }

}

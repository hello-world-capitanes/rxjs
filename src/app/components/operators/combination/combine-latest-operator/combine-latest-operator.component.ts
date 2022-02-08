import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { combineLatest, tap } from 'rxjs';
import { Subscription } from 'rxjs/internal/Subscription';

@Component({
  selector: 'app-combine-latest-operator',
  templateUrl: './combine-latest-operator.component.html',
  styleUrls: ['./combine-latest-operator.component.scss']
})
export class CombineLatestOperatorComponent implements OnInit, OnDestroy {
  data: string[][] = []
  initialData: string[] = []

  subscription!: Subscription
  formControl = new FormControl('', []);
  formControlMore = new FormControl('', []);

  constructor() {}

  ngOnInit(): void {
    const formChanges = this.formControl.valueChanges.pipe(
        tap((value) => {
          this.initialData = [...this.initialData, value]
        }));

    const formChangesMore = this.formControlMore.valueChanges.pipe(
  tap((value) => {
    this.initialData = [...this.initialData, value]
  }));


    this.subscription = combineLatest([formChanges, formChangesMore])
    .subscribe((value) => {
        this.data.push(value);
        this.data = [...this.data];
      })
  }

  onClickButton() {
    this.initialData = []
    this.data = []
    this.formControl.reset();
    this.formControlMore.reset();
  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe()
    }
  }

}

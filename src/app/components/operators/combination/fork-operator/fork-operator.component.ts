import { Component, OnDestroy, OnInit } from '@angular/core'
import { FormControl } from '@angular/forms'
import {
  forkJoin,
  Observable,
  Subject,
  Subscription,
  takeUntil,
  tap
} from 'rxjs'

@Component({
  selector: 'app-fork-operator',
  templateUrl: './fork-operator.component.html',
  styleUrls: ['./fork-operator.component.scss']
})
export class ForkOperatorComponent implements OnInit, OnDestroy {
  data: string[][] = []
  initialData: string[] = []

  subscription: Subscription[] = []
  formControl = new FormControl('', [])
  formControlMore = new FormControl('', [])

  subjectOne: Subject<string> = new Subject()
  subjectTwo: Subject<string> = new Subject()

  subjectOne$: Observable<string> = this.subjectOne.asObservable()
  subjectTwo$: Observable<string> = this.subjectTwo.asObservable()

  constructor() {}

  ngOnInit(): void {
    this.createObservable();
  }

  createObservable() {

     const subForm = this.formControl.valueChanges
       .pipe(
         tap((value) => {
           this.initialData = [...this.initialData, value]
           this.subjectOne.next(value)
         }),
         takeUntil(this.subjectOne$)
       )
       .subscribe();

     const subFormMore = this.formControlMore.valueChanges
       .pipe(
         tap((value) => {
           this.initialData = [...this.initialData, value]
           this.subjectTwo.next(value)
         })
       )
       .subscribe()

     const subFork = forkJoin([this.subjectOne$, this.subjectTwo$]).subscribe({
       next: (value) => {
         console.log(value);
         this.data.push(value);
         this.data = [...this.data];
       },
       complete: () => {
         this.unsubcribeAll();
       }
     });

     this.subscription = [subForm, subFormMore, subFork];

  }

  unsubcribeAll() {
    this.subscription.forEach((subscription) => {
      if (subscription) {
        subscription.unsubscribe();
      }
    });
  }

  onClickFinishOne() {
    this.subjectOne.complete();
  }

  onClickFinishTwo() {
    this.subjectTwo.complete();
  }

  onClickButton() {
    this.initialData = [];
    this.data = [];
    this.formControl.reset();
    this.formControlMore.reset();
    this.unsubcribeAll();
    this.createObservable();
  }

  ngOnDestroy(): void {
    this.unsubcribeAll();
  }
}

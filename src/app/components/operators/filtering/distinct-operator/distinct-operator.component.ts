import { Component, OnInit } from '@angular/core';
import { distinct, distinctUntilChanged, distinctUntilKeyChanged, from } from 'rxjs';

@Component({
  selector: 'app-distinct-operator',
  templateUrl: './distinct-operator.component.html',
  styleUrls: ['./distinct-operator.component.scss']
})
export class DistinctOperatorComponent implements OnInit {

  initialDataMultiply = [1,1,2,2,3,4,4];
  streamMultiply = from(this.initialDataMultiply);
  dataMultiply: number[] = [];

  initialDataPeople = [
    { name: "Rei", lastname: "Skywalker", age: "20" },
    { name: null, lastname: null, age: null },
    { name: "Obi Wan", lastname: "Kenobi", age: "26" },
    { name: "Obi Wan", lastname: "Kenobi", age: "26" },
    { name: "Anakin", lastname: "Skywalker", age: "19" },
    { name: "Mace", lastname: "Windu", age: "35" },
    { name: null, lastname: null, age: null },
    { name: "Luke", lastname: "Skywalker", age: "21" },
    { name: "Luke", lastname: "Skywalker", age: "21" },
  ];
  streamPeopleKey = from(this.initialDataPeople);
  streamPeople = from(this.initialDataPeople);
  dataPeopleKey: string[] = [];
  dataPeople: string[] = [];
  
  constructor() { }

  ngOnInit(): void {
    this.streamMultiply.pipe(distinct()).subscribe(value => {
      this.dataMultiply.push(value);
    });

    this.streamPeopleKey.pipe(distinctUntilKeyChanged("lastname")).subscribe(person => {
      if (!!person?.name) {
        this.dataPeopleKey.push(person?.name);
      }
    });

    this.streamPeople.pipe(distinctUntilChanged((prev, next) => {
      return prev?.lastname === next?.lastname
    })).subscribe(person => {
      if (!!person?.name) {
        this.dataPeople.push(person?.name);
      }
    });
  }

}

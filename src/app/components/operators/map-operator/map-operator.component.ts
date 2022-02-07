import { Component, OnInit } from '@angular/core';
import { from, map } from 'rxjs';

@Component({
  selector: 'app-map-operator',
  templateUrl: './map-operator.component.html',
  styleUrls: ['./map-operator.component.scss']
})
export class MapOperatorComponent implements OnInit {
  
  initialDataMultiply = [1,2,3,4];
  streamMultiply = from(this.initialDataMultiply);
  dataMultiply: number[] = [];

  initialDataPeople = [
    { name: "Anakin", lastname: "Skywalker", age: "19" },
    { name: "Obi Wan", lastname: "Kenobi", age: "26" },
    { name: "Mace", lastname: "Windu", age: "35" },
  ];
  streamPeople = from(this.initialDataPeople);
  dataPeople: string[] = [];

  constructor() { }

  ngOnInit(): void {
    this.streamMultiply.pipe(map(value => 2*value)).subscribe(value => {
      this.dataMultiply.push(value);
    });

    this.streamPeople.pipe(map(person => person?.name)).subscribe(name => {
      this.dataPeople.push(name);
    });
  }

}

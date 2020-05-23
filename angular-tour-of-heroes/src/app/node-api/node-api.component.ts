import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-node-api',
  templateUrl: './node-api.component.html',
  styleUrls: ['./node-api.component.css']
})
export class NodeApiComponent implements OnInit {

  counter = 0;

  constructor() { }

  ngOnInit(): void {
  }

  increment(){
    this.counter++;
  }
}

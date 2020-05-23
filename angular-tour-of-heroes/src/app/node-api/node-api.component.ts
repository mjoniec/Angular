import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-node-api',
  templateUrl: './node-api.component.html',
  styleUrls: ['./node-api.component.css']
})
export class NodeApiComponent implements OnInit {

  counter;

  constructor(private httpClient: HttpClient) { }

  ngOnInit(): void {
  }

  increment(){
    this.httpClient.get('http://localhost:3000/url')
      .subscribe(response => {
        console.log('xx');
        this.counter = response.toString();
      });
  }
}

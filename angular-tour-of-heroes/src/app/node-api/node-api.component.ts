import { Component, OnInit } from '@angular/core';
import { ApiHttpService } from '../api-http.service';
import { Constants } from '../config/constants'

@Component({
  selector: 'app-node-api',
  templateUrl: './node-api.component.html',
  styleUrls: ['./node-api.component.css']
})
export class NodeApiComponent implements OnInit {

  counter;

  constructor(
    private constants: Constants, 
    private apiHttpService: ApiHttpService) 
    { }

  ngOnInit(): void {
  }

  increment(){
    this.apiHttpService.get(this.constants.API_ENDPOINT)
      .subscribe(response => {
        this.counter = response.toString();
      });
  }
}

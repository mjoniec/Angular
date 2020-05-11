import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {

  counter = 0;
  res = "";
  btn0

  constructor() { }

  ngOnInit(): void {
  }

  increment(){
    this.counter++;
  }

  btnEql_A(){
    var a = this.res.split(/[-+*/]/);
    var a0 = parseInt(a[0], 2);
    var a1 = parseInt(a[1], 2);
         if(this.res.includes("+")) this.res = (a0 + a1).toString(2);
    else if(this.res.includes("-")) this.res = (a0 - a1).toString(2);
    else if(this.res.includes("*")) this.res = (a0 * a1).toString(2);
    else if(this.res.includes("/")) this.res = (a0 / a1).toString(2);
  }

  btn0_A() {
    this.res = this.res + "0";
  }  

  btn1_A() {
    this.res = this.res + "1";
  }

  btnClr_A() {
    this.res = "";
  } 

  btnSum_A() {
    this.res = this.res + "+";
  }

  btnSub_A() {
    this.res = this.res + "-";
  }  

  btnMul_A() {
    this.res = this.res + "*";
  } 

  btnDiv_A() {
    this.res = this.res + "/";
  }
}

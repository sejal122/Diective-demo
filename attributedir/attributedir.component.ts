import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-attributedir',
  templateUrl: './attributedir.component.html',
  styleUrls: ['./attributedir.component.css'],
  styles:[``]
})
export class AttributedirComponent implements OnInit {
public mystyles=[ "red","green","blue","orange","black","purple"]





mycolor:string;
changecolor(val){
 this.mycolor=val;

}
  constructor() { }
  public successClass="text-success"
  public isSpecial=true
  public hasError=false
  public messages={
    "text-success":!this.hasError,
    "text-style":this.isSpecial,
    "text-error":this.hasError

  }
str:string="blue";
clr:boolean=false;
bgColor=false
  ngOnInit() {
  }

}

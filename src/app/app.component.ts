import {Component, Input, OnInit} from '@angular/core';
import {DomSanitizer} from '@angular/platform-browser';

import {Observable} from 'rxjs/Observable'
import {Subject} from 'rxjs/Subject';
import 'rxjs/add/observable/interval'
import 'rxjs/add/operator/takeUntil';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  public property: any;
  public inputValue: any;

  constructor(private sanitizer: DomSanitizer) {
  }

  public title = "Angular-4"

  /********************************************************************
   *Property Binding [Unsafe URL Bypass Dom Sanitizer - Browser Module]
   ********************************************************************/
  public imageSrc = this.sanitizer.bypassSecurityTrustUrl("data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjwhLS0gR2VuZXJhdG9yOiBBZG9iZSBJbGx1c3RyYXRvciAxOS4xLjAsIFNWRyBFeHBvcnQgUGx1Zy1JbiAuIFNWRyBWZXJzaW9uOiA2LjAwIEJ1aWxkIDApICAtLT4NCjxzdmcgdmVyc2lvbj0iMS4xIiBpZD0iTGF5ZXJfMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeD0iMHB4IiB5PSIwcHgiDQoJIHZpZXdCb3g9IjAgMCAyNTAgMjUwIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCAyNTAgMjUwOyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+DQo8c3R5bGUgdHlwZT0idGV4dC9jc3MiPg0KCS5zdDB7ZmlsbDojREQwMDMxO30NCgkuc3Qxe2ZpbGw6I0MzMDAyRjt9DQoJLnN0MntmaWxsOiNGRkZGRkY7fQ0KPC9zdHlsZT4NCjxnPg0KCTxwb2x5Z29uIGNsYXNzPSJzdDAiIHBvaW50cz0iMTI1LDMwIDEyNSwzMCAxMjUsMzAgMzEuOSw2My4yIDQ2LjEsMTg2LjMgMTI1LDIzMCAxMjUsMjMwIDEyNSwyMzAgMjAzLjksMTg2LjMgMjE4LjEsNjMuMiAJIi8+DQoJPHBvbHlnb24gY2xhc3M9InN0MSIgcG9pbnRzPSIxMjUsMzAgMTI1LDUyLjIgMTI1LDUyLjEgMTI1LDE1My40IDEyNSwxNTMuNCAxMjUsMjMwIDEyNSwyMzAgMjAzLjksMTg2LjMgMjE4LjEsNjMuMiAxMjUsMzAgCSIvPg0KCTxwYXRoIGNsYXNzPSJzdDIiIGQ9Ik0xMjUsNTIuMUw2Ni44LDE4Mi42aDBoMjEuN2gwbDExLjctMjkuMmg0OS40bDExLjcsMjkuMmgwaDIxLjdoMEwxMjUsNTIuMUwxMjUsNTIuMUwxMjUsNTIuMUwxMjUsNTIuMQ0KCQlMMTI1LDUyLjF6IE0xNDIsMTM1LjRIMTA4bDE3LTQwLjlMMTQyLDEzNS40eiIvPg0KPC9nPg0KPC9zdmc+DQo=");


  /**********************
   *Sample List Repeater
   **********************/
  public listArray = [
    {color: "red", value: "#f00"},
    {color: "green", value: "#0f0"},
    {color: "blue", value: "#00f"},
    {color: "cyan", value: "#0ff"},
    {color: "magenta", value: "#f0f"}
  ];

  /******************************
   *Structural Directive Controls
   ******************************/
  public showMainContent = true;
  public switchCaseVal = {active: "magenta"};

  passComponentClickHandler() {
    console.log(`Component Fn Init.`);
  }

  public passComponentAttrList = this.listArray;


  /******************************
   *RxJS Subscribe/Unsubscribe Fn
   ******************************/
  public subjectSubscription = new Subject();
  public observableTimerProgress:number;

  unSubscribe(){
    this.subjectSubscription.next(true);
    this.subjectSubscription.unsubscribe();
  }

  ngOnInit() {
    Observable.interval(2000).takeUntil(this.subjectSubscription).subscribe((rData) => {
        console.log(rData,"<<<<<<<<<");
        this.observableTimerProgress = rData;
    });
  }
}

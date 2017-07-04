import {Component, OnInit} from '@angular/core';
import {ApiService} from "./../api.service";

@Component({
  selector: 'app-module-a',
  templateUrl: './module-a.component.html',
  styleUrls: ['./module-a.component.css']
})

export class ModuleAComponent implements OnInit {

  constructor(private apiServiceRef: ApiService) {
  }

  /***********************************************
   *HTTP - XMLHttpRequest (XHR)
   **********************************************/
  fetchListResult: any;
  fetchListError: any;
  fetchListType = "error";

  fetchListBtnOnClick() {
    this.apiServiceRef.fetchList(this.fetchListType).subscribe((response) => {
      this.fetchListResult = response.records;
      this.fetchListError = "";
    }, (error) => {
      this.fetchListResult = [];
      this.fetchListError = error;
    });
  }

  trackByListResult(index) {
    return index;
  }

  /***********************************************
   *HTTP - JSONP
   *Wikipedia URL - https://en.wikipedia.org/....
   **********************************************/

  fetchWikiResult: any;
  fetchWikiError: any;

  fetchWithJsonp() {
    this.apiServiceRef.fetchWithJsonp().subscribe((response) => {
      this.fetchWikiError = "";
      this.fetchWikiResult = response;
    }, (error) => {
      this.fetchWikiResult = [];
      this.fetchWikiError = error;
    });
  }

  fetchWithoutJsonp() {
    this.apiServiceRef.fetchWithoutJsonp().subscribe((response) => {
      this.fetchWikiError = "";
      this.fetchWikiResult = response;
    }, (error) => {
      this.fetchWikiResult = [];
      this.fetchWikiError = error;
    });
  }


  ngOnInit() {
  }

}

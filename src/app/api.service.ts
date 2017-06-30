import {Injectable} from '@angular/core';
import {Http, Response, Jsonp} from '@angular/http';

import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/throw';

@Injectable()
export class ApiService {
  constructor(private http: Http, private jsonp: Jsonp) {
  }

  fetchList(type) {
    let slug = (type === "error") ? "angular_tut_error" : "angular_tut_success";
    return this.http
      .get("http://demo4692809.mockable.io/" + slug)
      .map(this.responseExtraction)
      .catch(this.errorHandler);
  }

  fetchWithoutJsonp() {
    return this.http
      .get("https://en.wikipedia.org/w/api.php?search=angular&action=opensearch&format=json&callback=JSONP_CALLBACK")
      .map(this.responseExtraction)
      .catch(this.errorHandler);
  }

  fetchWithJsonp() {
    return this.jsonp
      .get("https://en.wikipedia.org/w/api.php?search=angular&action=opensearch&format=json&callback=JSONP_CALLBACK")
      .map(this.responseExtraction)
      .catch(this.errorHandler);
  }

  responseExtraction(response) {
    return response._body ? response.json() : {};
  }

  errorHandler(err) {
    return Observable.throw(err);
  }
}

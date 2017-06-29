import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';

@Injectable()
export class ApiService {
  constructor(private http: Http) {
  }

  fetchSampleList() {
    return this.http.get("http://demo4692809.mockable.io");
  }
}

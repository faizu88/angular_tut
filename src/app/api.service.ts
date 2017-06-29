import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class ApiService {
  constructor(private http: Http) {
  }

  fetchList() {
    return this.http.get("http://demo4692809.mockable.io").map(this.responseExtraction);
  }

  responseExtraction(response) {
   // let body = response.json();
    console.log(response, "resp");
    //return body.data || {};
   return response ? response.json() :{};

  }
}

import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Sample } from './sample';

@Injectable()
export class SampleService{
  private samplesUrl = '/api/v1/samples.json';

  constructor(private http: Http){}

  getSamples(): Promise<Sample[]>{
    return this.http.get(this.samplesUrl)
      .toPromise()
      .then(response => response.json() as Sample[])
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.log('error occured', error);
    return Promise.reject(error.message || error);
  }
}

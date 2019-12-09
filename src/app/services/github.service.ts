
import {HttpClient} from '@angular/common/http';
import {Inject, Injectable} from '@angular/core';
import {Observable} from 'rxjs';

export interface IRepository {
  name: string;
  full_name: string;
  html_url: string;
  size: number;
  watchers: number;
  "owner": {
    "login": string,
    "avatar_url": string,
  },
}


@Injectable()
export class GithubService {

  constructor(
    private http: HttpClient,
    @Inject('BASE_URL') private baseUrl: string
  ) {
  }

  public search(value: string): Observable<any> {
    return this.http.get(`${this.baseUrl}${value}`);
  }

}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Story } from '../interfaces/story';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class StoriesFeedService {

  constructor(private http: HttpClient) { }

  getStoriesFeed(): Observable<Story[]> {
    return this.http.get<Story[]>
    (
      `${environment.baseUrl.url}/${environment.methods.storiesFeed}`
    );
  }

}

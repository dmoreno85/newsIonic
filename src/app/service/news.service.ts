import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  constructor(private http : HttpClient) { }

  getNews():Observable<any>{
    return this.http.get(`https://www.circuitricardotormo.com/wp-json/wp/v2/posts?page=1&per_page=15&_embed`);
  }

  getNewId(id:string):any{
    return this.http.get(`https://www.circuitricardotormo.com/wp-json/wp/v2/posts/${id}?_embedbed?`);
  }
}

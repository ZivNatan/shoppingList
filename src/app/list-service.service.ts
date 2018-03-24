import { Injectable } from '@angular/core';
import { Observable } from "rxjs/Rx"
import { HttpClient }  from '@angular/common/http';

@Injectable()
export class ListServiceService {

  constructor(private http: HttpClient) { }


  getList(): Observable<any> {
      return this.http.get('../assets/data.json');
  }

  addItem(item): Observable<any> {
      return this.http.post('../assets/data.json',item);
  }



}

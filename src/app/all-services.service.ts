import { Injectable } from '@angular/core'
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class AllServicesService {
  constructor (private httpClient: HttpClient) {}
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  getLabels (): Observable<any> {
    return this.httpClient.get<any>(
      'http://localhost:3000/labels',
      this.httpOptions
    )
  }

  postTree (data: any): Observable<any> {
    return this.httpClient.post<any>(
      'http://localhost:3000/result',
      data,
      this.httpOptions
    )
  }
}

import { Injectable } from '@angular/core'
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable } from 'rxjs'
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class AllServicesService {
  api: any = environment.api
  constructor (private httpClient: HttpClient) {}
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  getLabels (): Observable<any> {
    return this.httpClient.get<any>(
      `${this.api}labels`,
      this.httpOptions
    )
  }

  postTree (data: any): Observable<any> {
    return this.httpClient.post<any>(
      `${this.api}result`,
      data,
      this.httpOptions
    )
  }
}

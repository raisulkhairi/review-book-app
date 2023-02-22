import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Books, Reviews } from './model/data.model';
import { Observable, pipe, Subject, tap } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private _refresh$ = new Subject<void>()
  constructor(private http: HttpClient) { }

  get refresh$() {
    return this._refresh$
  }

  get(): Observable<Books[]> {
    return this.http.get<Books[]>('http://localhost:3000/books');
  }

  create(payload: Books): Observable<Books> {
    return this.http.post<Books>('http://localhost:3000/books', payload)
      .pipe(
        tap(() => {
          this._refresh$.next()
        })
      )
  }

  addReview(payload: Books): Observable<Books> {
    return this.http.put<Books>(`http://localhost:3000/books/`,payload)
  }

  getById(id: number) {
    return this.http.get<Books>(`http://localhost:3000/books/${id}`)
  }



  // getDataById(payload: Books) {
  //   return this.http.get(`http://localhost:3000/books/${payload.id}`,payload)
  // }


}

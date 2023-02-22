import { Component, OnInit, ChangeDetectorRef, Output, EventEmitter } from '@angular/core';
import { ApiService } from 'src/app/api.service';
import { Books } from 'src/app/model/data.model';
import { BehaviorSubject, Subscription, switchMap } from 'rxjs';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {
  @Output() idTaken = new EventEmitter<any>();
  suscription!: Subscription
  book: Books[] = [];
  refreshList$ = new BehaviorSubject<boolean>(true)
  constructor(private apiService: ApiService, private cd: ChangeDetectorRef) { }

  ngOnInit(): void {
    this.get()
    this.suscription = this.apiService.refresh$.subscribe(() => {
      this.get()
    })
  }

  get() {
    this.apiService.get().subscribe((data) => {
      this.refreshList$.next(false)
      this.cd.detectChanges()
      console.log(data);
      this.book = data
    })
  }

  takeId(data: any) {
    this.idTaken.emit(data);
    
  }
}

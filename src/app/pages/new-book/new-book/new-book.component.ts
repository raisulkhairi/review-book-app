import { Component, OnInit, ChangeDetectorRef, EventEmitter, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ApiService } from 'src/app/api.service';
import { Books } from 'src/app/model/data.model';

@Component({
  selector: 'app-new-book',
  templateUrl: './new-book.component.html',
  styleUrls: ['./new-book.component.css']
})
export class NewBookComponent implements OnInit {
  randomId!: number
  bookForm: Books = {
    id: this.randomId,
    name: '',
    year: "",
    reviews: [
      {
        email: "",
        note: "",
        star: 0
      }
    ]
  }
  constructor(private apiService: ApiService) {
  }

  ngOnInit(): void {
  }

  create() {
    this.apiService.create(this.bookForm).subscribe({
      next: (data) => {
        this.getRandomId()
        console.log('get random id:', this.getRandomId());
        console.log(data);
        this.resetForm()
      },
      error: (err) => {
        console.log(err);

      }
    })
  }

  getRandomId() {
    let result = Math.floor((Math.random() * 6) + 1)
    this.randomId = result
  }

  resetForm() {
    this.bookForm.id = this.randomId
    this.bookForm.name = ''
    this.bookForm.reviews.map((data) => {
      data.email = '',
        data.note = ''
      data.star = 0
    })
    this.bookForm.year = ''

  }
}

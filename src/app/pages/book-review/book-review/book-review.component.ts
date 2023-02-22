import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/api.service';
import { Books, Reviews } from 'src/app/model/data.model';

@Component({
  selector: 'app-book-review',
  templateUrl: './book-review.component.html',
  styleUrls: ['./book-review.component.css']
})
export class BookReviewComponent implements OnInit {

  constructor(private apiService: ApiService, private route: ActivatedRoute, private router: Router) { }
  isDisabledInput: boolean = true
  hasInformation = true
  headerText!: string
  email!: string
  note!: string
  star!: any
  reviews: any
  inputEmail!: string
  reviewForm: Reviews =
    {
      email: '',
      note: '',
      star: null
    }

  ngOnInit(): void {
    console.log('form email', this.inputEmail);
    if (this.reviewForm.email === '' || this.reviewForm.note === '' || this.reviewForm.star === null) {
      this.isDisabledInput = true
      console.log('input disabled');

    } else {
      this.isDisabledInput = false
      console.log('input disable');
    }
  }

  checkData(data: any) {
    this.reviews = data.reviews
    this.reviews.map((x: any) => {
      this.email = x.email
      this.note = x.note
      this.star = x.star
    })
    this.headerText = data.name
    this.hasInformation = false
  }

  addReview() {
    this.reviews.push(this.reviewForm)
    
  }

  resetForm() {
    this.reviews.email = ''
    this.reviews.note = ''
    this.reviews.star = 0
  }

  validateInput(event: KeyboardEvent) {
    const pattern = /^[0-9]*$/; // Hanya angka 0-9 yang diizinkan
    const inputChar = String.fromCharCode(event.keyCode);

    // Memeriksa apakah tombol yang ditekan adalah Backspace
    if (event.code === 'Backspace') {
      return;
    }

    if (!pattern.test(inputChar)) {
      // Jika karakter yang dimasukkan bukan angka, maka hentikan event keydown/keypress
      event.preventDefault();
    }
  }


}

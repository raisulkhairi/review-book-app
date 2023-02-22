import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'review-book';
  database: any;

  ngOnInit(): void {
  }

  // checkData(datas: any) {
  //   this..push(this.database);
  //   console.log(datas);
  //   console.log('asdasd')
  // }


}

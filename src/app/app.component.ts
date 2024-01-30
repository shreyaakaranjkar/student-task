import { Component } from '@angular/core';
import { Istudent } from './interfaces/student';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'student';

  studentArr: Array<Istudent> = [
    {
      fname : 'John',
    lname : 'Doe',
    email : 'jd@gmail.com',
    contact : 1234456
  }
  ]

  getStdData(stdObj : Istudent){
    console.log(stdObj);
    this.studentArr.push(stdObj)
  }
}

import { Component } from '@angular/core';
import { Iproduct, Istudent } from './interfaces/student';

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

  productArray:Array<Iproduct> = [
    {
      prodName : 'Lavie',
      prodDesc : 'Handbags, clutches, purse',
      category : 'product',
      img : 'https://m.media-amazon.com/images/I/91Ak-EDKC3L._SY695_.jpg'
    }
  ]

  getStdData(stdObj : Istudent){
    console.log(stdObj);
    this.studentArr.push(stdObj)
  }

  getProductData(prodObj : Iproduct){
    this.productArray.push(prodObj)
  }
}

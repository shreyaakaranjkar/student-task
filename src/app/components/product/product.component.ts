import { Component, OnInit } from '@angular/core';
import { Iproduct } from 'src/app/interfaces/student';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  ngOnInit(): void {
    // throw new Error('Method not implemented.');
  }

  prodName:string = ''
  prodDesc : string = '';

  onAddProduct(){
    let obj : Iproduct={
      prodName : this.prodName,
      prodDesc : this.prodDesc
    }
    console.log(obj);
    
  }
}

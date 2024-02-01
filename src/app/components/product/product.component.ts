import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Iproduct, productCatg } from 'src/app/interfaces/student';

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
  imgLink : string = ''

  @Input() getproductArr : Array<Iproduct>=[]
  @Output() sendProductData : EventEmitter<Iproduct> = new EventEmitter<Iproduct>();

  onAddProduct(prodobject : productCatg){
    let obj : Iproduct={
      prodName : this.prodName,
      prodDesc : this.prodDesc,
      category : prodobject,
      img : this.imgLink
    }
    if(!Object.values(obj).includes("")){
      // this.getproductArr.push(obj)
      this.sendProductData.emit(obj)
    console.log(obj);

    }
    
  }
}

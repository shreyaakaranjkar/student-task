import { Component, Input } from '@angular/core';
import { Iproduct } from 'src/app/interfaces/student';

@Component({
  selector: 'app-productcat',
  templateUrl: './productcat.component.html',
  styleUrls: ['./productcat.component.scss']
})
export class ProductcatComponent {

  @Input() getproductArr : Array<Iproduct> = []
}

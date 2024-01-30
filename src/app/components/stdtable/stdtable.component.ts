import { Component, Input } from '@angular/core';
import { Istudent } from 'src/app/interfaces/student';

@Component({
  selector: 'app-stdtable',
  templateUrl: './stdtable.component.html',
  styleUrls: ['./stdtable.component.scss']
})
export class StdtableComponent {
@Input() getStdArr!:Array<Istudent>
}

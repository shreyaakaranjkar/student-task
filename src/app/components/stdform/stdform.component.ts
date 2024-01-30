import { Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';
import { Istudent } from 'src/app/interfaces/student';

@Component({
  selector: 'app-stdform',
  templateUrl: './stdform.component.html',
  styleUrls: ['./stdform.component.scss']
})
export class StdformComponent {
@ViewChild('fname') fname !:ElementRef;
@ViewChild('lname') lname !:ElementRef;
@ViewChild('email') email !:ElementRef;
@ViewChild('contact') contact !:ElementRef;

@Output() stdData : EventEmitter<Istudent> = new EventEmitter<Istudent>()
  onAddStudent(){
    let obj : Istudent = {
      fname: this.fname.nativeElement.value,
      lname: this.lname.nativeElement.value,
      email: this.email.nativeElement.value,
      contact: +this.contact.nativeElement.value,
    }
    if(!Object.values(obj).includes("")){
      console.log(obj);
      this.stdData.emit(obj);
      this.fname.nativeElement.value ='';
      this.lname.nativeElement.value = '';
     this.email.nativeElement.value = ''
      this.contact.nativeElement.value = ''
    }
  }
}

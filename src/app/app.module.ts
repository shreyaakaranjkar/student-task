import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { StdformComponent } from './components/stdform/stdform.component';
import { StdtableComponent } from './components/stdtable/stdtable.component';
import { ProductComponent } from './components/product/product.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProductcatComponent } from './components/productcat/productcat.component';

@NgModule({
  declarations: [
    AppComponent,
    StdformComponent,
    StdtableComponent,
    ProductComponent,
    ProductcatComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

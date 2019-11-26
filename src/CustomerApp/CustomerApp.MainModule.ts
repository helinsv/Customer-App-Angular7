import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './Customer-routing.module';
import { CustomerComponent } from './Customer/CustomerApp.CustomerComponent';
import { HomeComponent } from './Home/CustomerApp.HomeComponent';
import { SupplierComponent } from './Supplier/CustomerApp.SupplierComponent';
import { MasterPageComponent } from './Home/CustomerApp.MasterPageComponent';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule, MatCardModule, MatInputModule, MatTableModule, MatListModule } from '@angular/material';

@NgModule({
  declarations: [
    CustomerComponent, HomeComponent, SupplierComponent, MasterPageComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule, MatCardModule, MatTableModule, MatInputModule, MatListModule,
    FormsModule,
    RouterModule.forRoot([
      { path: 'Home' , component: HomeComponent },
      { path: 'Customer' , component: CustomerComponent },
      { path: 'Supplier' , component: SupplierComponent },
      { path: '' , component: SupplierComponent }])
  ],
  providers: [],
  bootstrap: [MasterPageComponent]
})
export class CustomerModule { }

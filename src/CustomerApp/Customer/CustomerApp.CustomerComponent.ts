import { Component } from '@angular/core';
import { Customer } from './CustomerApp.model';

@Component({
  selector: 'app-root',
  templateUrl: './CustomerApp.CustomerView.html',
  styleUrls: ['./CustomerApp.component.sass']
})
export class CustomerComponent {
  title = 'CustumerApp';
  CustomerModel: Customer = new Customer();
  CustomerModels: Array<Customer> = new Array <Customer>();

  Add(){
  this.CustomerModels.push(this.CustomerModel);
  this.CustomerModel = new Customer();
  }
}


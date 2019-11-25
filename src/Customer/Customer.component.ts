import { Component } from '@angular/core';
import { Customer } from './Customer.model';

@Component({
  selector: 'app-root',
  templateUrl: './Customer.component.html',
  styleUrls: ['./Customer.component.sass']
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


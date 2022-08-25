import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { EmployeeService } from 'src/app/services/employee.service';
import * as data from './../../../assets/json/employees.json';

@Component({
  selector: 'app-data-exchange',
  templateUrl: './data-exchange.component.html',
  styleUrls: ['./data-exchange.component.css']
})
export class DataExchangeComponent implements OnInit {

  public employeeCount: number;
  public employees: any[] = (data as any).default;
  public employee: any;
  public disableForm: boolean;
  public subscription: Subscription;

  constructor(private _employeeService: EmployeeService) { }

  ngOnInit(): void {
    this._employeeService.setEmployeeCount(this.employees.length);
    // this.subscription = this._employeeService.getEmployeeCount().subscribe((employeeCount) => {
    //   this.employeeCount = employeeCount;
    // });
    // console.log(this.employees);
  }

  ngOnDestroy() {
    // if (this.subscription) this.subscription.unsubscribe();
    // console.log("Component Destroyed " + this.employeeCount);
  }

  getEmployeeDetails(data: any)
  {
    this.employee = data;
    this.disableForm = true;
  }

  editEmployeeDetails(data: any)
  {
    this.employee = data;
    this.disableForm = false;
  }

  onSaveClick(data: any) {
    let index = this.employees.findIndex(emp => emp.id == data.id);

    if(index != -1) {
      this.employees[index] = data;
    }
    else{
      this.employees.push(data);
    }
    console.log(data);
  }
}

import { Component, OnInit } from '@angular/core';
import { Employee } from 'src/app/models/employee';
import { EmployeeService } from 'src/app/services/employee.service';

@Component({
  selector: 'app-angular-intermediate',
  templateUrl: './angular-intermediate.component.html',
  styleUrls: ['./angular-intermediate.component.css']
})
export class AngularIntermediateComponent implements OnInit {

  public employees: Employee[];

  constructor(private _employeeService: EmployeeService) { }

  ngOnInit(): void {
    this.employees = this._employeeService.getEmployees();
    // let filteredEmployees = this.employees.
  }

}

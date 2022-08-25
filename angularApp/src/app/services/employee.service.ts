import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import data from '../../assets/json/employees.json'
import { Employee } from '../models/employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  private _employeeCount = new BehaviorSubject<number>(0);
  private _employeeCount$ = this._employeeCount.asObservable();
  private _employees: Employee[] = (data as any).default;
  constructor() { }

  getEmployeeCount() {
    return this._employeeCount$;
  }

  setEmployeeCount(latestValue: any)
  {
    // console.log("value set is " + latestValue);
    return this._employeeCount.next(latestValue);
  }

  getEmployees()
  {
    return this._employees;
  }
}

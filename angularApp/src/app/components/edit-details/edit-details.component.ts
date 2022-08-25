import { Component, ElementRef, EventEmitter, Input, OnInit, Output, QueryList, ViewChildren } from '@angular/core';
import { Subscription } from 'rxjs';
import { EmployeeService } from 'src/app/services/employee.service';
import * as data from './../../../assets/json/US_States.json';

@Component({
  selector: 'app-edit-details',
  templateUrl: './edit-details.component.html',
  styleUrls: ['./edit-details.component.css']
})
export class EditDetailsComponent implements OnInit {

  @Input() employee: any | undefined;
  @Input() disableForm: boolean;
  @Output() employeeSaved = new EventEmitter();

  @ViewChildren('selectLabel') listofFormElements: QueryList<ElementRef>;

  public departments:any[] | undefined;
  public states:any[] | undefined;
  public employeeCount: number;
  public subscription: Subscription;

  constructor(private _employeeService: EmployeeService) { }

  ngOnInit(): void {
    this.departments = ['Technology', 'Production', 'Sports', 'HR', 'Marketing', 'Sales']
    this.states = (data as any).default;
    this.subscription = this._employeeService.getEmployeeCount().subscribe((employeeCount) => {
      this.employeeCount = employeeCount;
    });
    // console.log(this.employee);
  }

  ngAfterViewInit()
  {
    this.listofFormElements.forEach(element => {
      element.nativeElement.style.fontWeight = "600";
      element.nativeElement.style.fontFamily = "cursive";
    });
  }

  ngOnDestroy() {
    if (this.subscription) this.subscription.unsubscribe();
    console.log("Component Destroyed " + this.employeeCount);
  }

  onSave() {
    // if(!this.employee.id)
    // {
    //   this.employee.id = this.employeeCount + 1;
    //   this._employeeService.setEmployeeCount(this.employee.id);
    // }
    this.employeeSaved.emit(this.employee);
  }
}

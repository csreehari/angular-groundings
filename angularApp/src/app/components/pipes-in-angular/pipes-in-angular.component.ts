import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes-in-angular',
  templateUrl: './pipes-in-angular.component.html',
  styleUrls: ['./pipes-in-angular.component.css']
})
export class PipesInAngularComponent implements OnInit {

  public earBudsCost:number = 6589.25;
  public purchaseDate:Date = new Date();
  public salarySlip: any | undefined;
  public direction: string = 'rtl'
  public codeExamples:any | undefined;
  public value: string | undefined;

  constructor() { }

  ngOnInit(): void {
    this.salarySlip = {
      employeeName: 'Sreehari Chinta',
      employeeDesignation: 'Software Engineer',
      company: 'EPAM Systems India Pvt. Ltd.',
      mobileNumber: 9491982289,
      location: 'Hyderabad, IN',
      salaryStructure: [
        {component: 'hra', componentValue: 10963 },
        {component: 'provident fund', componentValue: 2145.50 },
        {component: 'professional tax', componentValue: 1286.50 },
        {component: 'special allowances', componentValue: 25674 },
        {component: 'income tax', componentValue: 1895 },
        {component: 'basic', componentValue: 21623 },
        {component: 'total', componentValue: 63586 },
      ]
    }
  }

  getInnerHtml()
  {
    // console.log(this.codeExamples);
  }
}

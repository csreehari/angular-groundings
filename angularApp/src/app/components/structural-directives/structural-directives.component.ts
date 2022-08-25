import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-structural-directives',
  templateUrl: './structural-directives.component.html',
  styleUrls: ['./structural-directives.component.css']
})
export class StructuralDirectivesComponent implements OnInit {

  public isTagEnabled: boolean = false;
  public employeeId: number = 0;
  public selectedCarIndex: number = 0;
  public selectedCarValue: string = 'select';


  public employeeList:any[] = [];

  constructor() { }

  ngOnInit(): void {
    this.employeeList = [
      { id:1, name:'Sreehari Chinta', email:'Sreehari_Chinta@email.com' },
      { id:2, name:'Gagandeep Rao', email:'Gagandeep_Rao@email.com' },
      { id:3, name:'Nikhileshwar Rao', email:'Nikhileshwar_Rao@email.com' },
    ];
  }

  showTag() {
    this.isTagEnabled = true;
  }
  hideTag() {
    this.isTagEnabled = false;
  }
  onddlListChange(data: any)
  {
    this.selectedCarIndex = data.selectedIndex;
    this.selectedCarValue = data.value;
  }

}

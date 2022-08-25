import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-template-reference',
  templateUrl: './template-reference.component.html',
  styleUrls: ['./template-reference.component.css']
})
export class TemplateReferenceComponent implements OnInit {

  public spanValue: string = '';
  public selectedData:string = '';

  constructor() { }

  ngOnInit(): void {
  }

  onSubmitClick(data:any) {
    this.spanValue= data.value;
  }

  onddlListChange(data:any) {
    this.selectedData = 'The selected data has index as ' + data.selectedIndex + ' and value as ' + data.value;
  }
}

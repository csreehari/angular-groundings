import { Component, OnInit } from '@angular/core';
import { UserModel } from '../../models/user-model';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent implements OnInit {

  public message:string = "This is the app-interpolation-component created";
  public userName:string = "Sreehari Chinta";
  public isUserName:boolean = false;
  public inputValue:string = "Sreehari";
  public textValue:string = "";
  public imgsrc:string = "https://picsum.photos/seed/picsum/386/204";
  public txtGreen = "txt-green";
  public txtLower = "txt-lower";
  public txtUpper = "txt-upper";
  public txtRed = "txt-red";
  public count = 0;
  public userModel: UserModel = new UserModel();

  constructor() { }

  ngOnInit(): void {
    this.userModel.name = "Sreehari Chinta";
    this.userModel.emailId = "Sreehari_Chinta@epam.com";
  }

  getGreetingMessage(): string {
    return "Hi "+ this.userName;
  }

  getCssClass(): string {
    return 'txt-blue';
  }

  hasError():boolean {
    return false;
  }

  onButtonClick() {
    this.count++;
  }

  onKeyUp(data:any) {
    this.textValue = data.target.value;
  }

  onSave() {
    console.log(this.userModel.name + ', ' + this.userModel.emailId);
  }

}

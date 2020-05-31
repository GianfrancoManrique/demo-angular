import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  fullName:string;
  email:string;
  password:string;
  isEnabled=false;
  persons=[];
  

  captureFullName(evt){
    this.fullName=evt.target.value;
    this.isEnabled=this.fullName.trim()==''?false:true;
  }

  captureEmail(evt){
    this.email=evt.target.value;
    this.isEnabled=this.email.trim()==''?false:true;
  }

  capturePassword(evt){
    this.password=evt.target.value;
    this.isEnabled=this.password.trim()==''?false:true;
  }

  addPerson(){
    var person={};

    if(this.fullName==undefined||this.fullName.trim()==''){
      return false;
    }

    person["fullname"]=this.fullName;
    
    if(this.password==undefined||this.password.trim()==''){
      return false;
    }
    
    person["password"]=this.password;

    if(this.email==undefined||this.email.trim()==''){
      return false;
    }
    
    person["email"]=this.email;

    this.persons.push(person);

    console.log(this.persons);
  }
}

import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import {FormGroup }   from '@angular/forms';
import { RegisterService } from '../register.service';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  FirstName = new FormControl('', [Validators.required]);
  constructor(private registerService:RegisterService ) { }
  LastName=new FormControl('');
  email = new FormControl('', [Validators.required, Validators.email]);
  password=new FormControl('', [Validators.required]);
  confirm=new FormControl('',[Validators.required]);
  toppings = new FormControl();
  toppingList: string[] = ['Extra cheese', 'Mushroom', 'Onion', 'Pepperoni', 'Sausage', 'Tomato'];

  getErrorFnameMessage(){
    return this.FirstName.hasError('required') ? 'You must enter a value':'';
  }
 
  getpassErrorMessage(){
    return this.password.hasError('required') ? 'You must enter a value': '';
  }

  getconfirmErrorMessage(){
    if(this.password.value!=this.confirm.value) {
    return "Password Not Matching";
    }
  }

  getErrorMessage() {
    return this.email.hasError('required') ? 'You must enter a value' :
        this.email.hasError('email') ? 'Not a valid email' :
            '';
  }
  ngOnInit() {
  }
  register():void{
    var userDeatils={
      "email":this.email.value,
      "password":this.password.value,
      "firstName":this.FirstName.value,
      "lastName":this.LastName.value,
      "interests":this.toppings.value
    }
    console.log(userDeatils);
    this.registerService.addUserDeatails(userDeatils)
  .subscribe((data)=>{console.log("success"),data},
  error=>{console.log(error.status)}
  );
  }
  
}

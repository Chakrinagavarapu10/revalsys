import { Component, OnInit } from '@angular/core';
import {FormGroup, Validators, FormBuilder} from '@angular/forms';
import { Router } from '@angular/router';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router , private fb: FormBuilder){}

  profile: FormGroup;
  emailTemp:string;
  details=[
    {
      "mail":"user@gmail.com",
      "pwd":"9259@cHA"
    }
    
  ]



  ngOnInit() {

    this.buildform();

  }



  /*  function to build the form controls */
  buildform(){

    this.profile = this.fb.group({
      
        email:['',  [ Validators.required ,Validators.minLength(8), Validators.pattern(/^\w+@[a-z0-9A-Z_]+?\.[a-zA-Z]{2,5}$/)] ],
        password:['',[ Validators.required, Validators.minLength(8), Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/)]]
      
    });

  }



  /*  function to check the user is valid or not */
  verify(){
       let emailVar=this.profile.get('email').value;
       let passVar = this.profile.get('password').value

    if(this.details[0].mail== emailVar && this.details[0].pwd == passVar)
    {
       this.emailTemp=emailVar.substring(0,emailVar.lastIndexOf("@"));
       localStorage.setItem('logName',this.emailTemp);
       this.router.navigate(['list']);
      }
    else{
      alert("Enter valid credentials")
    }
  }



}

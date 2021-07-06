import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.scss']
})
export class FeedbackComponent implements OnInit {

  feebbackForm: FormGroup;


  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.buildform();
  }

    /*  function to build the form controls */
    buildform(){

      this.feebbackForm = this.fb.group({
        
          email:['',  [ Validators.required ,Validators.minLength(8), Validators.pattern(/^\w+@[a-z0-9A-Z_]+?\.[a-zA-Z]{2,5}$/)] ],
          name:['',[ Validators.required]],
          mobile :['',[ Validators.required,Validators.maxLength(10),Validators.pattern(/^[1-9]\d{9}$/)]],
          description :['',[ Validators.required ,Validators.maxLength(250)]]


        
      });
  
    }

    omSubmit(){
      let form = this.feebbackForm ;

      if(form.valid){
        let data = JSON.stringify(form.value) ;

        console.log(data);

        localStorage.setItem('formData',data);
        form.reset();
      }

    }

}

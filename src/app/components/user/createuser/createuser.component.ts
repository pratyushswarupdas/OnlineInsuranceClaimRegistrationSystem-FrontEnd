import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/models/User';
import { CreateUserService } from 'src/app/services/create-user.service';


@Component({
  selector: 'app-createuser',
  templateUrl: './createuser.component.html',
  styleUrls: ['./createuser.component.css']
})
export class CreateuserComponent implements OnInit {
  addForm: FormGroup;							
  submitted: boolean = false;							
  allUsers: User[];
  							
							
  constructor(private formBuilder: FormBuilder,private router: Router,  private createUserService: CreateUserService) { }							
							
  ngOnInit() {							
    this.addForm = this.formBuilder.group({														
      id: ['', Validators.required],							
      password:['', Validators.required],							
      userrole: ['', Validators.required]							
    });							
			
  }							
							
  onSubmit() {							
    this.submitted = true;							
    if(this.addForm.invalid){							
      return;							
    }	
    console.log(this.addForm.value);						
     this.createUserService.createUser(this.addForm.value).subscribe((response) => {
        console.log(this.addForm.value);		
        alert("User Created!");
        //TODO: Insert router code.									
      });							
  }		
}

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/models/User';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;									
  submitted: boolean = false;									
  invalidLogin: boolean = false;									
           flag=false;       
  constructor(private formBuilder: FormBuilder, private router: Router,private serv:UserService ) { }									
  users:User[]; 
       
  onSubmit(){									
    this.submitted = true;									
    if(this.loginForm.invalid){									
      return;									
    }		

    this.serv.getUsers().subscribe((data)=>{
      //fetching all users from db
      this.users=data;
    },
    (err)=>{
      console.log(err);
      
    });

    console.log(this.users);
    
    for(var i=0;i<this.users.length;i++){
      console.log(this.users[i].username,this.users[i].password);
      if(this.loginForm.controls.username.value ===this.users[i].username &&									
        this.loginForm.controls.password.value===this.users[i].password){	
          this.flag=true;								
          localStorage.setItem("username",this.loginForm.controls.username.value);	
          console.log(this.users);
          this.router.navigate(['policy']);		
         						
    }									
    }
   		
    if(this.flag==false){
      this.invalidLogin=true;
    }else{
      this.invalidLogin=false;
    }
  }									
                  
  ngOnInit() {									
                      
                  
    this.loginForm = this.formBuilder.group({									
      username: ['', Validators.required],									
      password: ['', Validators.required]									
    });									
                  
  }		
}

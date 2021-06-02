import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/models/User';
import { AccountService } from 'src/app/services/account.service';
import { UserService } from 'src/app/services/user.service';


@Component({
  selector: 'app-createaccount',
  templateUrl: './createaccount.component.html',
  styleUrls: ['./createaccount.component.css']
})
export class CreateaccountComponent implements OnInit {
  accntcreate:FormGroup;									
  submitted: boolean = false;									
  invalidLogin: boolean = false;	
	flag=false;  
  users:User[];
  loginuser:string|null;


  constructor(private formBuilder: FormBuilder, private router: Router,private accountService:AccountService,private userService:UserService ) { }	
 
  onSubmit(){		
this.submitted = true;
   					this.loginuser=localStorage.getItem('username');
             console.log(this.loginuser)				
    if(this.accntcreate.invalid)
    {									
      return;									
    }	
    if(this.accntcreate.valid)
    { 

   // console.log("login user "+ this.loginuser);
    // console.log("login user  accnt "+this.loginForm.controls.username.value);

    if(this.loginuser == this.accntcreate.controls.username.value)
    {
     //console.log("Insured name  from form "+this.loginForm.controls.insuredname.value)

      
     // console.log("account created");
      for(let user of this.users)
      {
        //console.log("user name from user table"+user.id)
       // console.log(user.userrole);
        if(user.id === this.accntcreate.controls.insuredname.value && user.userrole==="insured")
        {
      this.accountService.createAccount(this.accntcreate.value)
          .subscribe((data)=>{
            this.invalidLogin=false;
          console.log("account created")
         });
        } else
        {
          this.invalidLogin=true;
         //alert("user not exist")
      } 
 }
 }
 else{
        this.invalidLogin=true;
      } 
    }  
    }
    
  ngOnInit()
   {									
    this.accntcreate= this.formBuilder.group
    ({					
      id:['',[Validators.required,Validators.pattern("[0-9]{8,8}")]],
      // accntnumber:['',[Validators.min(8),Validators.max(9),Validators.required]],	
      //accntnumber:[],		
      username: ['',Validators.required],									
      insuredname: ['',Validators.required]									
  });	
   
 
 		 //fetching all users from db.json
      this.userService.getUsers().subscribe((data)=>{
        this.users=data;
      });		
                
	

}

}

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
  users:User[];
  currentUserRole: string | null;

  constructor(private formBuilder: FormBuilder, private router: Router,private userService:UserService ) { }									
   
       
  onSubmit(){									
    this.submitted = true;									
    if(this.loginForm.invalid){		
      alert("Invalid Login Credentials!");
							
      return;									
    }		
    if(this.loginForm.valid)
    { 

      console.log(this.users);
      
      for(let user of this.users){
        if(user.id === this.loginForm.controls.username.value  &&									
           user.password === this.loginForm.controls.password.value)
        {					
            this.invalidLogin=false;			
            localStorage.setItem(
              'username',
              this.loginForm.controls.username.value
            );
            localStorage.setItem(
              'userID',
              user.userrole
            );
            
            console.log(user);
            
            console.log("UserRole: "+localStorage.getItem('userID'));
            this.currentUserRole=localStorage.getItem('userID');
            if(this.currentUserRole=="admin")
            {
              this.router.navigateByUrl('/admin/viewpolicy');
            }
            else if(this.currentUserRole=="agent")
            {
              this.router.navigateByUrl('/agent/viewpolicy');
            }
            else if(this.currentUserRole=="insured")
            {
              this.router.navigateByUrl('/insured/viewpolicy');
            }
            else{
              alert("Invalid Login Credentials!");

              console.log("wrong roleID");
              this.router.navigateByUrl('');
            }
             

        }	
        else{
          this.invalidLogin=true;
        }								
      }   
      // if(this.flag==false){
      //   this.invalidLogin=true;
      // }else{
      //   this.invalidLogin=false;
      // }
    
    }
  }									
                  
  ngOnInit() {									
      this.loginForm = this.formBuilder.group({									
      username: ['', Validators.required],									
      password: ['', Validators.required]									
    });	
    localStorage.removeItem('username')
    //fetching all users from db.json
    this.userService.getUsers().subscribe((data)=>{
      this.users=data;
    });					
                  
  }		
}

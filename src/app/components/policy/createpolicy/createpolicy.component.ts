import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AccountService } from 'src/app/services/account.service';
import { PolicyService } from 'src/app/services/policy.service';

@Component({
  selector: 'app-createpolicy',
  templateUrl: './createpolicy.component.html',
  styleUrls: ['./createpolicy.component.css']
})
export class CreatepolicyComponent implements OnInit {

  addPolicyForm:FormGroup;
  submitted:boolean=false;
  account:Account[];
  currentuser: string | null;
  invalidLogin: boolean = false;									
  currentUserRole: string | null;

  constructor(private formBuilder: FormBuilder,private router:Router,private policyService:PolicyService,private accountService:AccountService) { }

  ngOnInit(): void {
    this.addPolicyForm=this.formBuilder.group({
      id:[],
      policyPremium:['',Validators.required],
      accountNumber:['',Validators.required]
    });
    this.currentuser=localStorage.getItem('username');
    this.currentUserRole=localStorage.getItem('userID');
    console.log(this.currentUserRole)
    	
  }

  onSubmit(){
    this.submitted = true;		

    console.log(this.currentuser);				
    if(this.addPolicyForm.invalid){		
      console.log("form invalid")							
							
      return;		
    }	

   
    if(this.addPolicyForm.valid)
    {
      if(this.currentUserRole=="admin")
      {
        //fetching all Accounts from db.json
        this.accountService.getAccount().subscribe((data)=>{
          this.account=data;
        });
        for(let accounts of this.account)
      {
        console.log(accounts.id);
        console.log(this.addPolicyForm.controls.accountNumber.value);

        if(accounts.id==this.addPolicyForm.controls.accountNumber.value )
        {
          console.log("posting policy");						
          this.policyService.createPolicy(this.addPolicyForm.value)								
          .subscribe( data => {								
            this.router.navigate(['policy']);		
            console.log("added");
            
          });
          this.router.navigate(['createpolicy']); 

          break;
        }
        else{
          console.log("wrong acc number");						

          this.invalidLogin=true;
        } 
      }
      }
      else if(this.currentUserRole=="agent"){
        //fetching all Accounts from db.json
        this.accountService.getAccountByUserName(this.currentuser).subscribe((data)=>{
          this.account=data;
        });
        for(let accounts of this.account)
      {
        console.log(accounts.id);
        console.log(this.addPolicyForm.controls.accountNumber.value);

        if(accounts.id==this.addPolicyForm.controls.accountNumber.value )
        {
          console.log("posting policy");						
          this.policyService.createPolicy(this.addPolicyForm.value)								
          .subscribe( data => {								
            this.router.navigate(['policy']);		
            console.log("added");
            
          });
          this.router.navigate(['createpolicy']); 

          break;
        }
        else{
          console.log("wrong acc number");						

          this.invalidLogin=true;
        } 
      }
      }
    }	
  }
}

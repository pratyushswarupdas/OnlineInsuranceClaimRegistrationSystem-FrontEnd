import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { account } from 'src/app/models/account';
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
  account1:account[];
  account2:account[];

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
    console.log(this.currentUserRole);
    //fetching all Accounts from db.json
    this.accountService.getAccounts().subscribe((data)=>{
      this.account1=data;
    });
    //fetching Selective Accounts from db.json
    this.accountService.getAccountByUserName(this.currentuser).subscribe((data)=>{
      this.account2=data;
    });
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
        
        for(let accounts of this.account1)
      {
        console.log(accounts.id);
        console.log(this.addPolicyForm.controls.accountNumber.value);

        if(accounts.id==this.addPolicyForm.controls.accountNumber.value )
        {
          console.log("posting policy");						
          this.policyService.createPolicy(this.addPolicyForm.value)								
          .subscribe( (data) => {								
          this.router.navigateByUrl('/admin/viewpolicy');		
          console.log("added");
            
          });
        this.router.navigateByUrl('/admin/viewpolicy');		

          break;
        }
        else{
          console.log("wrong acc number");						

          this.invalidLogin=true;
        } 
      }
      }
      else if(this.currentUserRole=="agent"){
        
        for(let accounts of this.account2)
      {
        console.log(accounts.id);
        console.log(this.addPolicyForm.controls.accountNumber.value);

        if(accounts.id==this.addPolicyForm.controls.accountNumber.value )
        {
          console.log("posting policy");						
          this.policyService.createPolicy(this.addPolicyForm.value)								
          .subscribe( data => {								
            this.router.navigateByUrl('/agent/viewpolicy');		
            console.log("added");
            
          });
          // this.router.navigateByUrl(['createpolicy']); 

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

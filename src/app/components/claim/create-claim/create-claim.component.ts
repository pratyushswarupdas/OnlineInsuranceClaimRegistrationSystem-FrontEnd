import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Policy } from 'src/app/models/Policy';
import { AccountService } from 'src/app/services/account.service';
import { ClaimService } from 'src/app/services/claim.service';
import { PolicyService } from 'src/app/services/policy.service';

@Component({
  selector: 'app-create-claim',
  templateUrl: './create-claim.component.html',
  styleUrls: ['./create-claim.component.css']
})
export class CreateClaimComponent implements OnInit {

  constructor(private formBuilder: FormBuilder,private claimService:ClaimService,private policyService:PolicyService,private accountService:AccountService) { }

  ngOnInit(): void {
    this.getPolicyObj();
    
    
    this.claimForm = this.formBuilder.group({
      id: [],
      claimReason: ['', Validators.required],
      claimType: ['', Validators.required],
      accidentlocStreet: ['', Validators.required],
      accidentCity: ['', Validators.required],
      accidentState: ['', Validators.required],
      accidentZip: ['', Validators.required],
      policyNumber: ['', Validators.required],
      answer1: ['', Validators.required],
      answer2: ['', Validators.required],
      answer3: ['', Validators.required],
      answer4: ['', Validators.required],
      answer5: ['', Validators.required],
      claimAmount:['',Validators.required],
      
    }); 
    
  }

  currentUser:string| null;
  currentUserRole:string|null;
  
  
  claimForm: FormGroup;
  submitted: Boolean = false;
  policy:Policy[];
  
 
  
 onSubmit(){
  // this.policyService.getPolicy().subscribe((data)=>
  // {
    
  //   this.policy=data;

  // console.log(this.policy);
  // });
   this.submitted=true;
   this.currentUser=localStorage.getItem('username');
   this.currentUserRole=localStorage.getItem('userID') 
   var val:number=0;

   if(this.claimForm.controls.answer1.value==="1")
   {val=val+200;
  
    }
    if(this.claimForm.controls.answer2.value==="1")
   {val=val+200;
  
    }
    if(this.claimForm.controls.answer3.value==="1")
   {val=val+200;
  
    }
    if(this.claimForm.controls.answer4.value==="1")
   {val=val+200;
  
    }
    if(this.claimForm.controls.answer5.value==="1")
   {val=val+200;
  
    }
    console.log(val);
   this.claimForm.controls['claimAmount'].setValue(val);
   
   
  var okay=0;
  for(let p of this.policy){ 
    if(p.id==this.claimForm.controls.policyNumber.value)
    { 
      okay=1;
    }
    
  }
  if(okay==0){
    alert("No Policy Found");
  }
   
if(okay==1){
   
   
       
          if(this.claimForm.invalid){							
            return;							
          }	

          this.claimService.createClaim(this.claimForm.value).subscribe((response) => {
            console.log(this.claimForm.value);
          });
          alert("Claim Has been created");
   
  }
 }
 getPolicyObj() { 
 this.policyService.getpolicy().subscribe((data)=>
  {
    
    this.policy=data;

  console.log(this.policy);
  });
}
}
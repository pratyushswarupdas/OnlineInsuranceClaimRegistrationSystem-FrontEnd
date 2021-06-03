import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ClaimService } from 'src/app/services/claim.service';

@Component({
  selector: 'app-create-claim',
  templateUrl: './create-claim.component.html',
  styleUrls: ['./create-claim.component.css']
})
export class CreateClaimComponent implements OnInit {

  constructor(private formBuilder: FormBuilder,private claimService:ClaimService) { }

  ngOnInit(): void {

    this.claimForm = this.formBuilder.group({
      id: [],
      claimReason: ['', Validators.required],
      claimType: ['', Validators.required],//
      accidentlocStreet: ['', Validators.required],//
      accidentCity: ['', Validators.required],//
      accidentState: ['', Validators.required],//
      accidentZip: ['', Validators.required],
      policyNumber: ['', Validators.required],
      answer1: ['', Validators.required],
      answer2: ['', Validators.required],
      answer3: ['', Validators.required],
      answer4: ['', Validators.required],
      answer5: ['', Validators.required],
      claimAmount:[],
      
    }); 
    
  }

  currentUser:string| null;
  currentUserRole:string|null;
  claimAmount=0;
  claimForm: FormGroup;
  submitted: Boolean = false;
  
 
  
 onSubmit(){
   this.submitted=true;
   this.currentUser=localStorage.getItem('username');
   this.currentUserRole=localStorage.getItem('userID')  
   if(this.claimForm.controls.answer1.value==="1")
   {this.claimAmount=this.claimAmount+200;
  
    }
    if(this.claimForm.controls.answer2.value==="1")
   {this.claimAmount=this.claimAmount+200;
  
    }
    if(this.claimForm.controls.answer3.value==="1")
   {this.claimAmount=this.claimAmount+200;
  
    }
    if(this.claimForm.controls.answer4.value==="1")
   {this.claimAmount=this.claimAmount+200;
  
    }
    if(this.claimForm.controls.answer5.value==="1")
   {this.claimAmount=this.claimAmount+200;
  
    }
    console.log(this.claimAmount);
    
     
   

   switch(this.currentUserRole)
   { 
      case "insured":
        {  

          break;
        }

        case "agent":
        {   

          break;
        }

        case "admin":
        {  
          if(this.claimForm.invalid){							
            return;							
          }	
          this.claimService.createClaim(this.claimForm.value).subscribe((response) => {
            console.log(this.claimForm.value);
          });
          

          break;
        }


   }
 }
}




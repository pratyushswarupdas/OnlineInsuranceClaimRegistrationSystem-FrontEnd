import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Claim } from 'src/app/models/Claim';
import { ClaimService } from 'src/app/services/claim.service';

@Component({
  selector: 'app-view-claim',
  templateUrl: './view-claim.component.html',
  styleUrls: ['./view-claim.component.css']
})
export class ViewClaimComponent implements OnInit {

  getPolicyNo: FormGroup;
  allPolicy: any;
  submitted: boolean = false;
  invalidPolicy: boolean = true;
  claim: Claim[] | any;
  claimDetails: Claim[] | any;

  checker : number = 0;

  constructor(private formBuilder: FormBuilder,private router: Router,  private claimService: ClaimService) { }

  ngOnInit(): void {
    this.getPolicyNo = this.formBuilder.group({														
      policyNumber: ['', Validators.required],													
    });	

  this.getAllClaim();
  }

  onSubmit() {		
    this.submitted = true;	
    if(this.getPolicyNo.invalid){							
      return;							
    }	

    
      for(let policy of this.allPolicy){
        if(policy.policyNumber == this.getPolicyNo.controls.policyNumber.value){
           
          this.checker = 1;
          
              this.claimService.getClaimDetails().subscribe((data) => {
              this.claim = data; 
            });
           
            if(this.checker == 1){

            for(let c of this.allPolicy){
              let polNo = this.getPolicyNo.controls.policyNumber.value ;
              if(c.policyNumber == polNo){
                
                this.claimService.getReportByPolicyNumber(polNo).subscribe((data) => {      					
                  this.claimDetails = data;
                  console.log(this.claimDetails);
                });
              }
            }
          }
        }
        
      }
      if(this.checker == 0){
        alert("Policy Number not found ");
      }
     
      console.log(this.claimDetails);

  }	

  getAllClaim(){
    this.claimService.getClaimDetails().subscribe((data) => {
      this.allPolicy = data;
    })
  }

}



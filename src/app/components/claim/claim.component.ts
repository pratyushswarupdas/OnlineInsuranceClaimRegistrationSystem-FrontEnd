import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Policy } from 'src/app/models/Policy';
import { AccountService } from 'src/app/services/account.service';
import { ClaimService } from 'src/app/services/claim.service';
import { PolicyService } from 'src/app/services/policy.service';

@Component({
  selector: 'app-claim',
  templateUrl: './claim.component.html',
  styleUrls: ['./claim.component.css']
})
export class ClaimComponent implements OnInit {

  constructor(private formBuilder: FormBuilder,private claimService:ClaimService,private policyService:PolicyService,private accountService:AccountService) { }

  ngOnInit(): void {

}
}
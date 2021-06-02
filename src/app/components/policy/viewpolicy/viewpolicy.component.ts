import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { account } from 'src/app/models/account';
import { Policy } from 'src/app/models/Policy';
import { AccountService } from 'src/app/services/account.service';
import { PolicyService } from 'src/app/services/policy.service';

@Component({
  selector: 'app-viewpolicy',
  templateUrl: './viewpolicy.component.html',
  styleUrls: ['./viewpolicy.component.css']
})
export class ViewpolicyComponent implements OnInit {
  constructor(private router:Router,private policyService:PolicyService,private accountService:AccountService) { }
  policy:Policy[];
  accountNoSingle:string;
  accountNoArray=new Array();
  accounts:account[];
  
  tempPolicy=new Array();
  
  
  
  

  

  currentuser: string | null;
  currentUserRole: string | null;


  ngOnInit(): void {

    this.currentuser=localStorage.getItem('username');
    this.currentUserRole=localStorage.getItem('userID');

    switch(this.currentUserRole)
    {

      case "insured":
        break;

      case "agent":
        {
          
            this.accountService.getAccounts().subscribe((data) => {
              
              this.accounts = data.filter(word => word.username===localStorage.getItem("username"));
            console.log(this.accounts);  
            for (let accList of this.accounts )
            {
              this.policyService.getpolicyByAccountNumber(accList.id).subscribe((data)=>
              {
                
                this.policy=data;
                this.tempPolicy.push(this.policy);
                
                
                
                
              })
              
            } console.log(this.tempPolicy);

            
          }) 




          // for (var index = 0; index < this.accounts.length; ++index) {
          //   var jsonData = this.accounts[index];
          //   if(jsonData.username==this.currentuser)
          //   {this.policyService.getpolicyByAccountNumber(jsonData.id).subscribe((data)=>{ 
          //     this.policy=data;
          //     console.log(this.data);
          //   });


          //   }
          
         

          
          

            
          
        break;
        }
                
                

      case "admin":
        {
          this.policyService.getpolicy()
        .subscribe(data=> {
          this.policy = data;
          console.log(this.policy);
        });
      
        }
        break;

    }
  }

}

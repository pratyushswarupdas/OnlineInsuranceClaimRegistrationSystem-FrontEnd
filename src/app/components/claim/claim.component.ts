import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-claim',
  templateUrl: './claim.component.html',
  styleUrls: ['./claim.component.css']
})
export class ClaimComponent implements OnInit {


  constructor() { }

  ngOnInit(): void {
    
  }
  currentUser:string| null;
  currentUserRole:string|null;
  claimAmount:number|null;
  claimForm: FormGroup;
  submitted: Boolean = false;
 onSubmit(){
   this.submitted=true;
   this.currentUser=localStorage.getItem('username');
   this.currentUserRole=localStorage.getItem('userID')

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
          
          break;
        }


   }
 }

}

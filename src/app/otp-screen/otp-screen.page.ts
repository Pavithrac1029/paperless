import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-otp-screen',
  templateUrl: './otp-screen.page.html',
  styleUrls: ['./otp-screen.page.scss'],
})
export class OtpScreenPage implements OnInit {
  OTP: string = '';
  constructor() {
    
   }

  ngOnInit() {
  }
  otpController(event,next,prev, index){


    if(index == 6) {
      console.log("submit")
    }
    if(event.target.value.length < 1 && prev){
      prev.setFocus()
    }
    else if(next && event.target.value.length>0){
      next.setFocus();
    }
    else {
     return 0;
    } 
 }

}

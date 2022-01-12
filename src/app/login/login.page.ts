import { Component, OnInit } from '@angular/core';
import { Keyboard } from '@ionic-native/keyboard/ngx';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  providers: [Keyboard]
})
export class LoginPage implements OnInit {
  isKeyboardHide:boolean = true;
  constructor(private keyboard:Keyboard,public nav:NavController) { }

  ngOnInit() {
  }
  ionViewWillEnter() {
    this.keyboard.onKeyboardWillShow().subscribe(()=>{
      this.isKeyboardHide=false;
      // console.log('SHOWK');
    });

    this.keyboard.onKeyboardWillHide().subscribe(()=>{
      this.isKeyboardHide=true;
      // console.log('HIDEK');
    });
  }
  next(){
    this.nav.navigateRoot('/otp-screen')
  }
}

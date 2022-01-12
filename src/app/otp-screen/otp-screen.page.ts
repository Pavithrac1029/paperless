import { Component, OnInit } from '@angular/core';
import { Keyboard } from '@ionic-native/keyboard/ngx';
import { NavController } from '@ionic/angular';
@Component({
  selector: 'app-otp-screen',
  templateUrl: './otp-screen.page.html',
  styleUrls: ['./otp-screen.page.scss'],
  providers: [Keyboard]
})
export class OtpScreenPage implements OnInit {

  constructor(public navctrl:NavController) {
    
   }

  ngOnInit() {
  }
  back(){
    this.navctrl.navigateRoot("/login")
  }
}

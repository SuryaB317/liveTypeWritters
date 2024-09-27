import { Component } from '@angular/core';

@Component({
  selector: 'app-clock',
  templateUrl: './clock.component.html',
  styleUrls: ['./clock.component.css']
})
export class ClockComponent {

  currentTime: number = 60;
  sampleText : String = "Hey Surya its working!";
  userInput : String = '';
  checkText(): void{
    this.userInput === this.sampleText;
  }
   sleep = (ms: number): Promise<void> => {
    return new Promise((r) => setTimeout(r,ms));
  }
  async startTimer(){
    while(this.currentTime != 0){
    await this.sleep(1000);
    this.currentTime--;
    console.log(this.currentTime);
   }
  }
}

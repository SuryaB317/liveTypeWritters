import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-result-page',
  templateUrl: './result-page.component.html',
  styleUrls: ['./result-page.component.css']
})
export class ResultPageComponent {


  @Input() objData: any;

  animal_avatar:string = '';
  animal_avatar_res: string ='';
  isContentVisible: boolean = true;

  toogleContent() {
    this.isContentVisible = !this.isContentVisible;
  }



  ngOnChanges(): void {
    this.setAnimalAvatar();
  }
  setAnimalAvatar() {
    if (this.objData.charsCnt <= 150) {
      this.animal_avatar =' ./assets/img/turtle.svg';
      this.animal_avatar_res = 'Turtle';
    } else if (this.objData.charsCnt >= 150 && this.objData.value < 250) {
      this.animal_avatar ='./assets/img/dino.svg';
      this.animal_avatar_res = 'Dino';
    } else {
      this.animal_avatar ='./assets/img/octopus.svg';
      this.animal_avatar_res = 'Octobus';
    }
  }

  refreshPage(){
    window.location.reload()
  }
}

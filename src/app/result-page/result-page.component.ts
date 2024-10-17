import { ThemeService } from './../theme.service';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
@Component({
  selector: 'app-result-page',
  templateUrl: './result-page.component.html',
  styleUrls: ['./result-page.component.css']
})
export class ResultPageComponent implements OnInit {


  @Input() objData: any;

  animal_avatar:string = '';
  animal_avatar_res: string ='';
  isContentVisible: boolean = true;
  isDarkMode: boolean = false;

constructor(private themeService:ThemeService){}

  ngOnInit(): void {
    this.isDarkMode = this.themeService.isDarkMode();
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

  contentVisible(){
    this.isContentVisible = false;
  }
}

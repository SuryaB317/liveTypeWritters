import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent {

  @ViewChild('ss') ss !: ElementRef;
  @ViewChild('secDot') secDot !: ElementRef;
  @ViewChild('cirCol') cirCol !: ElementRef;


  title2 = "TYPING SPEED TEST";
  title1 = "Test your typing skills";

  words = '';
  inputText = '';
  text = "the sun dipped below the horizon, painting the sky in hues of orange and purple. a gentle breeze rustled the leaves of the nearby trees, carrying with it the sweet scent of blooming flowers. as twilight settled in, the first stars began to twinkle, each one a tiny beacon in the vast expanse of the night. nearby, the sound of laughter echoed from a group of friends gathered around a crackling bonfire, their faces illuminated by the warm glow. in that moment, everything felt perfect, as if time itself had paused to savor the beauty of the evening.".split(' ');
  wordsCount = this.text.length;

  comparisonResult: { character: string; isCorrect: boolean }[] = [];

  charPerMin: number = 0;
  wordPerMin: number = 0;

  isInputDisabled: boolean = false;
  isDarkMode: boolean = false;
  isContentVisible = true;

  objData: any = {
    wordsCnt: 0,
    charsCnt: 0,
    accuracy: 0,
    currentTime: 60
  }


  ngAfterViewInit() {
    this.updateCircle();
  }

  // For Timer
  sleep = (ms: number): Promise<void> => {
    return new Promise((r) => setTimeout(r, ms));
  }

  async startTimer() {
    this.isInputDisabled = false;

    while (this.objData.currentTime > 0) {
      await this.sleep(1000);
      this.objData.currentTime--;
      this.updateCircle();
    }
    this.isInputDisabled = true;
    this.isContentVisible = false;
  }

  //For timer border plus the circle styling
  updateCircle() {
    const currTime = this.objData.currentTime;
    const totalTime = 60;
    const dashOffSet = 440;

    if (this.ss && this.secDot) {
      const offset = dashOffSet - (dashOffSet * currTime) / totalTime;
      this.ss.nativeElement.style.strokeDashoffset = offset;
      this.secDot.nativeElement.style.transform = `rotate(${(currTime * 360) / totalTime}deg)`;
    }

    else {
      console.log("No ss available")
    }
  }

  // Generating new text for each time
  constructor() {
    this.newGame();

  }

  randomWord() {
    const randomIndex = Math.floor(Math.random() * this.wordsCount);
    return this.text[randomIndex];
  }
  formatWord(word: any) {
    return word + " ";
  }
  newGame() {

    for (let i = 0; i < 100; i++) {
      this.words += this.formatWord(this.randomWord());

    }
    this.compareCharacters('');
  }

  onInputChange(event: Event) {
    const input = (event.target as HTMLInputElement).value;
    this.inputText = input;
    this.compareCharacters(input);
  }

  compareCharacters(input: string) {
    this.comparisonResult = [];
    const fullText = this.words.trim();
    let correctCharCount = 0;

    console.log("Full Text:", fullText)
    for (let i = 0; i < fullText.length; i++) {
      const char = fullText[i];
      const inputChar = input[i] ? input[i] : '';
      const isCorrect = input[i] === char;


      if (isCorrect) {
        correctCharCount++;
      }
      this.comparisonResult.push({ character: char, isCorrect });
    }
    this.scoreCalc(correctCharCount);
    console.log("input text is:", this.inputText)
  }
  getPlaceHolderText(): string {
    return this.comparisonResult.map(char => char.character).join('');
  }

  onKeyUp(event: KeyboardEvent): void {
    console.log("key Pressed:", event.key);
  }

  scoreCalc(correctCharCount: number) {

    this.objData.charsCnt = correctCharCount;
    this.wordPerMin = this.inputText.trim().split(/\s+/).filter(word => word.length > 0).length; // Count of words
    this.objData.wordsCnt = this.wordPerMin;
  }

  //Toggle buttons

  toggleMode() {
    this.isDarkMode = !this.isDarkMode;
    this.applyTheme();
  }
  applyTheme() {
    if (this.isDarkMode) {
      document.body.classList.add('dark-mode');
      document.body.classList.remove('light-mode');
    } else {
      document.body.classList.add('light-mode');
      document.body.classList.remove('dark-mode');
    }
  }


}


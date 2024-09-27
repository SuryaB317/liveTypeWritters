import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-text-box',
  templateUrl: './text-box.component.html',
  styleUrls: ['./text-box.component.css']
})
export class TextBoxComponent {

  test = "Surya";
  words = '';

  inputText = '';
  text = 'the sun dipped below the horizon, painting the sky in hues of orange and purple. a gentle breeze rustled the leaves of the nearby trees, carrying with it the sweet scent of blooming flowers. as twilight settled in, the first stars began to twinkle, each one a tiny beacon in the vast expanse of the night. nearby, the sound of laughter echoed from a group of friends gathered around a crackling bonfire, their faces illuminated by the warm glow. in that moment, everything felt perfect, as if time itself had paused to savor the beauty of the evening.'.split(' ');
  wordsCount = this.text.length;

  comparisonResult: { character: string; isCorrect: boolean }[] = [];

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
    console.log(this.words)
    this.compareCharacters('');
  }

  onInputChange(event: Event) {
    const input = (event.target as HTMLInputElement).value;
    this.inputText = input;
    this.compareCharacters(input);
  }

  compareCharacters(input: string) {
    this.comparisonResult = [];
    const fullText = this.words.trim(); // Get the generated words without leading/trailing spaces

    console.log("Full Text:", fullText)
    for (let i = 0; i < fullText.length; i++) {
      const char = fullText[i];
      const isCorrect = input[i] === char; // Compare input character with the generated character
      this.comparisonResult.push({ character: char, isCorrect });
    }
  }
}

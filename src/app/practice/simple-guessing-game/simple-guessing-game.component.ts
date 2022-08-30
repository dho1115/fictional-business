import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-simple-guessing-game',
  templateUrl: './simple-guessing-game.component.html',
  styleUrls: ['./simple-guessing-game.component.css']
})

export class SimpleGuessingGameComponent implements OnInit {
  arrayOfWords: string[] = [
    'red',
    'sun',
    'moon',
    'cat',
    'move'
  ];
  randomIndex: number = Math.floor(Math.random() * this.arrayOfWords.length);

  randomWordSelected: string = this.arrayOfWords[this.randomIndex];

  word = this.randomWordSelected;

  showInputBox: boolean = false;

  guessSubmitted: boolean = false;

  yourGuess: string = ''

  constructor() {
    setTimeout(() => {
      this.showInputBox = !false;
      this.word = 'Now, can you remember the word?'
    }, 5300);
  }

  handleGuessSubmitted() {
    return this.guessSubmitted = !this.guessSubmitted;
  }

  handleVisibility() {
    return this.showInputBox ? "visible" : "hidden";
  }

  ngOnInit(): void {
  }

}

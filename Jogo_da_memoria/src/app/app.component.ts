import { Component } from '@angular/core';
import { CardData } from './components/Card/card.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  /*Variables */
  idNumbers: number[] = [1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6]
  latestCardInfo: CardData  = {id: 0, img: ''}
  numberOfOpenCards = 0;
  cardsFlipped = 0;
  userWon = false;

  /*Lifecycle hooks */
  ngOnInit() {
    this.shuffleArrayOfIdsOrder()
  }
  ngAfterViewInit() {
    this.defineOpenAnimation()
  }
  ngDoCheck() {
    if(this.cardsFlipped === 11) {
      setTimeout(() => {
        this.userWon = true;
        this.playVictorySong();
      }, 1000);
    }
  }

  /*Game logic */
  receiveClickedCard(cardInfo: CardData) {
    if(cardInfo.id !== this.latestCardInfo.id) {
      this.updateNumberOfOpenedCards();
      this.checkIfMatches(cardInfo)
      if(this.numberOfOpenCards <= 2 ) {
        this.latestCardInfo.id = cardInfo.id
        this.latestCardInfo.img = cardInfo.img
      }
    }
  }
  updateNumberOfOpenedCards() {
    this.cardsFlipped = document.getElementsByClassName("flip").length;
    const concludedCards = document.getElementsByClassName("immutable");
    this.numberOfOpenCards = ((this.cardsFlipped + 1) - concludedCards.length) 
  }
  checkIfMatches(cardInfo: CardData) {
    if(this.numberOfOpenCards === 2) {
      if(cardInfo.img !== this.latestCardInfo.img) {
          setTimeout(() => {
            this.callCloseAllAnimation();
          }, 700);
        
      } else {
        setTimeout(() => {
          this.defineSuccessfulPair(cardInfo.img)
        }, 700);
      }
    }
  }
  defineSuccessfulPair(cardName: string): void {
    const cards = document.getElementsByClassName(`flip-card ${cardName}`);
    for (let index = 0; index < 2; index++) {
      const card = cards[index];
      card.classList.add('immutable')
    }
  }


  /*Animations */
  defineOpenAnimation(): void {
    const cards = document.getElementsByClassName("flip-card");
    for (let index = 0; index < cards.length; index++) {
      const card = cards[index];
      card.addEventListener('click', (e) => {
        const cardHigherLevel = e.currentTarget as Element
        if(!(cardHigherLevel.classList.contains('immutable')) && this.numberOfOpenCards <= 2) {
          const innerCard = card.getElementsByClassName('flip-card-inner')[0]
          innerCard.classList.remove('flipBack')
          innerCard.classList.add('flip')
        }
      })
    }
  }
  callCloseAllAnimation(): void {
    const cards = document.getElementsByClassName("flip-card");
    for (let index = 0; index < cards.length; index++) {
      const card = cards[index];
      if(!(card.classList.contains('immutable'))) {
      const innerCard = card.getElementsByClassName('flip-card-inner')[0]
      innerCard.classList.remove('flip')
      innerCard.classList.add('flipBack')
      }
    }
  }

  /*Randomizes the order of the array */
   shuffleArrayOfIdsOrder() {
    for (var i = this.idNumbers.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = this.idNumbers[i];
        this.idNumbers[i] = this.idNumbers[j];
        this.idNumbers[j] = temp;
    }
  }
  
  /*Song played when you win*/
  playVictorySong() {
    //Stops default song
    const vid1 = document.getElementsByClassName('backtrack')[0] as HTMLVideoElement;
    vid1.pause();
    //Starts victory song
    const vid2 = document.getElementsByClassName('backtrack')[1] as HTMLVideoElement;
    vid2.play();
  }
}

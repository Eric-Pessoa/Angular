import { Component } from '@angular/core';
import { CardData } from './components/Card/card.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  title = 'Jogo_da_memoria';
  idNumbers: number[] = [1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6]

  latestCardInfo: CardData  = {id: '', img: ''}

  ngOnInit() {
    this.defineOpenAnimation()
    this.shuffleArrayOfIdsOrder()
  }

  receiveClickedCard(cardInfo: CardData) {
    this.checkIfMatches(cardInfo)
    this.latestCardInfo.id = cardInfo.id
    this.latestCardInfo.img = cardInfo.img
  }

  checkIfMatches(cardInfo: CardData) {
    if(cardInfo.img !== this.latestCardInfo.img) {
      this.latestCardInfo = {id: '', img: ''}
      setTimeout(() => {
        this.callCloseAllAnimation();
      }, 1500);
    } else {
      console.log('tá igual')
      this.successfulPair(cardInfo.img)
    }
  }

  successfulPair(cardName: string): void {
    const cards = document.getElementsByClassName(`flip-card ${cardName}`);
    for (let index = 0; index < cards.length; index++) {
      const card = cards[index];
      card.classList.remove('flip')
      card.classList.remove('flipBack')
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
        if(!(cardHigherLevel.classList.contains('immutable'))) {
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
}

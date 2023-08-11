import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  title = 'Jogo_da_memoria';
  idNumbers: number[] = [1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6]

  latestCardReceived: string = ''

  ngOnInit() {
    this.defineOpenAnimation()
    this.shuffleArrayOfIdsOrder(this.idNumbers)
  }

  receiveClickedCard(cardName: string) {
    this.checkIfMatches(cardName)
    this.latestCardReceived = cardName
  }

  checkIfMatches(cardName: string) {
    if(cardName !== this.latestCardReceived) {
      this.latestCardReceived = ''
      setTimeout(() => {
        this.callCloseAllAnimation();
      }, 1500);
    } else {
      console.log('tá igual')
      this.successfulPair(cardName)
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
      card.addEventListener('click', () => {
        const innerCard = card.getElementsByClassName('flip-card-inner')[0]
        if(!(innerCard.classList.contains('flip'))){
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
      const innerCard = card.getElementsByClassName('flip-card-inner')[0]
      innerCard.classList.add('flipBack')
      innerCard.classList.remove('flip')
    }
  }

  /*Randomizes the order of the array */
   shuffleArrayOfIdsOrder(array: number[]) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
  }
}

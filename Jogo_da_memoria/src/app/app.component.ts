import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  title = 'Jogo_da_memoria';
  idNumbers: number[] = [1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6]
  ngOnInit() {
    this.defineAnimation()
    this.shuffleArrayOfIdsOrder(this.idNumbers)
  }
  defineAnimation(): void {
    const cards = document.getElementsByClassName("flip-card");
    for (let index = 0; index < cards.length; index++) {
      const card = cards[index];
      card.addEventListener('click', () => {
        const innerCard = card.getElementsByClassName('flip-card-inner')[0]
        if(innerCard.classList.contains('flip')){
          innerCard.classList.remove('flip')
          innerCard.classList.add('flipBack')
        } else {
          innerCard.classList.add('flip')
          innerCard.classList.remove('flipBack')
        }
      })
    }
  }
   shuffleArrayOfIdsOrder(array: number[]) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
  }
}

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  title = 'Jogo_da_memoria';
  ngOnInit() {
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
}

import { Component, Input, Output, EventEmitter } from '@angular/core';

export interface CardData {
  id: number;
  img: string;
}

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
})

export class CardComponent  {

  @Input() imageId = 0; 
  @Input() cardId = 0;
  @Output() clickedCard = new EventEmitter<CardData>();

  imgSrc = '';

  ngOnInit() {
    this.defineImage();
  }

  playSoundEffect() {
    const vid = document.getElementsByClassName('sound_effect')[0] as HTMLVideoElement;
    vid.play();
  }

  emitClickedCard(e: MouseEvent) {
    this.playSoundEffect();
    const cardId = Number((e.currentTarget as Element).id)
    this.clickedCard.emit({id: cardId, img: this.imgSrc})
  }

  getPathToImage() {
    return `../../../assets/images/shapes/${this.imgSrc}.png`
  }

  defineImage() {
    switch(this.imageId) {
      case 1:
        this.imgSrc = 'glass_losangle'
        break;
      case 2:
        this.imgSrc = 'crescent_moon'
        break;
      case 3:
        this.imgSrc = 'orange_half_circle'
        break;
      case 4:
        this.imgSrc = 'purple_circle'
        break;
      case 5:
        this.imgSrc = 'red_triangle'
        break;
      case 6:
        this.imgSrc = 'yellow_square'
        break;
    }
  }

  

}

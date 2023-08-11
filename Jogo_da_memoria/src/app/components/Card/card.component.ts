import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
})
export class CardComponent  {

  @Input() imageId = 0; 
  @Output() clickedCard = new EventEmitter<string>();

  imgSrc = '';

  ngOnInit() {
    this.defineImage();
  }

  emitClickedCard() {
    this.clickedCard.emit(this.imgSrc)
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

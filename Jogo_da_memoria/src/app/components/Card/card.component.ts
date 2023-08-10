import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
})
export class CardComponent  {

  @Input() itemId = 0; 
  imgSrc = '';

  ngOnInit() {
    this.defineImage();
  }

  defineImage() {
    switch(this.itemId) {
      case 1:
        this.imgSrc = '../../../assets/images/shapes/glass_losangle.png'
        break;
      case 2:
        this.imgSrc = '../../../assets/images/shapes/crescent_moon.png'
        break;
      case 3:
        this.imgSrc = '../../../assets/images/shapes/orange_half_circle.png'
        break;
      case 4:
        this.imgSrc = '../../../assets/images/shapes/purple_circle.png'
        break;
      case 5:
        this.imgSrc = '../../../assets/images/shapes/red_triangle.png'
        break;
      case 6:
        this.imgSrc = '../../../assets/images/shapes/yellow_square.png'
        break;
    }
  }

  

}

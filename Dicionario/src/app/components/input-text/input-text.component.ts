import { Component, Output, Input, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-input-text',
  templateUrl: './input-text.component.html',
  styleUrls: ['./input-text.component.scss']
})
export class InputTextComponent {

  @Input() inputValue = ''
  @Output() inputEmission =  new EventEmitter<string>(); 

 emitValue(e: any ) {
  this.inputEmission.emit(e)
 }

 texto = ''

}

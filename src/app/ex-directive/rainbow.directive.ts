import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appRainbow]'
})
export class RainbowDirective {
@HostBinding('style.color') color = '';
@HostBinding('style.border-color') border = '';
private letters = '0123456789ABCDEF';

  constructor() { }

@HostListener('keydown') key() {
  this.color= this.getRandomColor();
  this.border=this.getRandomColor();
}



getRandomColor() : string {
  let color = '#';
  for(let i = 0; i < 6; i++) {
    color += this.letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

}

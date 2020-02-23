import {Directive, ElementRef} from '@angular/core';

@Directive({
  selector: '[appTitleCase]'
})
export class TitleCaseDirective {

  constructor(el: ElementRef) {
    el.nativeElement.style.backgroundColor = 'yellow';
  }

  private convertToTitleCase(text: string) {
    text = text.charAt(0).toUpperCase();
  }
}

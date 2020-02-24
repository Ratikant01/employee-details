import {AfterContentChecked, AfterViewInit, Directive, ElementRef} from '@angular/core';

@Directive({
  selector: '[appAutoFocus]'
})
export class AutoFocusDirective implements AfterViewInit {

  constructor(private eleRef: ElementRef) {
    eleRef.nativeElement.focus();
  }

  ngAfterViewInit(): void {
    this.eleRef.nativeElement.focus();
  }

}

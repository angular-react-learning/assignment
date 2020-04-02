import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[color]'
})
export class TestingDirective {
  constructor(private el : ElementRef) {
    this.el.nativeElement.style.color = "red";
  }
}

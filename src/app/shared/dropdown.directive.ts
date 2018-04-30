import { Directive, HostListener, HostBinding } from '@angular/core';

@Directive({
  selector: '[appDropdown]'
})

export class AppDropdownDirective implements OnInit {
  @HostBinding("class.open") condition = false;
  @HostListener('click') toggleOpen() {
    this.condition = !this.condition;
  }
}


// import { Directive, OnInit, ElementRef, Renderer2, HostListener } from '@angular/core';
//
// @Directive({
//   selector: '[appDropdown]'
// })
//
// export class AppDropdownDirective implements OnInit {
//   condition = false;
//   constructor(private elRef: ElementRef, private renderer: Renderer2) {}
//   @HostListener('click') click(eventData: Event) {
//     this.condition = !this.condition;
//     if(this.condition) {
//       this.renderer.addClass(this.elRef.nativeElement, 'open');
//     } else {
//       this.renderer.removeClass(this.elRef.nativeElement, 'open');
//     }
//   }
//   ngOnInit() {
//   }
// }

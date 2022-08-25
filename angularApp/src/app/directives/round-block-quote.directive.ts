import { Directive, ElementRef, Input, Renderer2, HostListener } from '@angular/core';

@Directive({
  selector: '[appRoundBlockQuote]'
})
export class RoundBlockQuoteDirective {
  @Input() appRoundBlockQuote: string | undefined;
  constructor(private elmRef: ElementRef, private renderer: Renderer2) { }

  ngOnInit() {
    let roundVal = `${this.appRoundBlockQuote}`;
    this.renderer.setStyle(this.elmRef.nativeElement, 'border-radius', roundVal);
    this.renderer.setStyle(this.elmRef.nativeElement, 'background-image', 'url("../../assets/images/5605216.jpg")');
    this.renderer.setStyle(this.elmRef.nativeElement, 'background-size', 'cover');
    this.renderer.setStyle(this.elmRef.nativeElement, 'background-position', 'center');
  }

  @HostListener('mouseenter') onMouseEnter() {
    this.renderer.setStyle(this.elmRef.nativeElement, 'box-shadow', '0 0 60px 5px rgba(148,146,148,1)');
    this.renderer.setStyle(this.elmRef.nativeElement, 'z-index', '100');
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.renderer.setStyle(this.elmRef.nativeElement, 'z-index', '0');
    this.renderer.setStyle(this.elmRef.nativeElement, 'box-shadow', 'none');
  }
}

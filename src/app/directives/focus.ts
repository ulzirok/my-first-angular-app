import { AfterViewInit, Directive, ElementRef, OnInit } from '@angular/core';

@Directive({
  selector: '[appFocus]'
})
export class Focus implements OnInit, AfterViewInit{

  constructor(private el: ElementRef) { }
  
  ngOnInit(): void {
    
  }
  
  ngAfterViewInit(): void {
    this.el.nativeElement.focus()
  }
  
}

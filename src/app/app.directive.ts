import {Directive, ElementRef, HostListener, HostBinding, Input} from '@angular/core';

@Directive({
  selector: '[appDirective]'
})

export class AppDirective {
  constructor(public elemRef: ElementRef) {
  }

  @Input('appDirective') appDirectiveRef;
  @Input('secondProperty') secondPropertyRef;

  /* @HostBinding [Default Attribute Setup - cust_bool_prop] => Console */
  @HostBinding("attr.cust_bool_prop") cust_bool_prop=true;

  @HostListener("click")onAppDirectiveOnClick() {
    console.log(this, "\n Directive Fn Init. >> Calling the bind function associated with 'appDirective' attribute");
    //Component Function - Reference
    this.appDirectiveRef();
    //Appling Styles - ElementRef
    this.elemRef.nativeElement.style.color = this.secondPropertyRef ? this.secondPropertyRef.color:'orange';
    this.cust_bool_prop =!this.cust_bool_prop;
  }

}

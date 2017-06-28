import {Directive, ElementRef, HostListener, HostBinding, Input} from '@angular/core';

@Directive({
  selector: '[appDirective]',
  host: {
    '(click)': 'onDirectiveClickRef($event)'
  }
})

export class AppDirective {
  constructor(public elemRef: ElementRef) {
  }

  /******************************************************
   *Passing Component function declaration into Directive
   *****************************************************/
  @Input('appDirective') appDirectiveRef;
  @Input('secondProperty') secondPropertyRef;

  /********************************************************************************
   *@HostListener [Passing Component function declaration into Attribute Directive]
   ********************************************************************************/
  @HostListener("click") onAppDirectiveOnClick() {
   if (this.secondPropertyRef) {
   //Appling Styles - ElementRef
   this.elemRef.nativeElement.style.color = this.secondPropertyRef.color;
   console.log("Binding Second Property >> ", this.secondPropertyRef);
   }
   //Component Function - Reference
   this.appDirectiveRef();

   this.cust_bool_prop = !this.cust_bool_prop;
   }

  /***********************************************************************
   *@HostBinding [Default Attribute Setup - 'cust_bool_prop' (true/false)]
   * Default - true
   ***********************************************************************/
  @HostBinding("attr.cust_bool_prop") cust_bool_prop = true;

  /*******************************************************************************************************
   *Directive Host Events [Check Directive Decorator Metadata]
   *Note : Comment out >> @HostListener [Passing Component function declaration into Attribute Directive]
   *After done checking revert back (Uncomment @HostListener)
   *******************************************************************************************************/
  onDirectiveClickRef(elemRef) {
    console.log("Directive Click Handler Init. >> host:{(click):Fn()}")
  }

}

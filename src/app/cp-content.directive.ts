import { Directive, HostBinding, HostListener, TemplateRef } from '@angular/core';
import { CpConditionalProjectionComponent } from './cp-conditional-projection/cp-conditional-projection.component';

@Directive({
  selector: '[appCpContent]',
  standalone: true
})
export class CpContentDirective {

  constructor(public templateRef: TemplateRef<unknown>) { }

}

@Directive({
  selector: 'button[appCpToggle]',
  standalone: true
})
export class CpToggeleDirective {
  @HostBinding('attr.aria-expanded') ariaExpanded = this.cpConditionalComponent.expanded;
  @HostBinding('attr.aria-controls') ariaControls = this.cpConditionalComponent.contentId;
  @HostListener('click') toggleConditionalComponent() {
    this.cpConditionalComponent.expanded = !this.cpConditionalComponent.expanded;
  }

  constructor(public cpConditionalComponent: CpConditionalProjectionComponent) { }

}

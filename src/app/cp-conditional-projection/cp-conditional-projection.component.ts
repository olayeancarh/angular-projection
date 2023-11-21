import { Component, ContentChild, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CpContentDirective } from '../cp-content.directive';

let nextId = 0;

@Component({
  selector: 'app-cp-conditional-projection',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cp-conditional-projection.component.html',
})
export class CpConditionalProjectionComponent {
  contentId = `zippy-${nextId++}`;
  @Input() public expanded: boolean = false;
  @ContentChild(CpContentDirective) content!: CpContentDirective;
}

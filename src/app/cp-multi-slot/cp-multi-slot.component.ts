import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-cp-multi-slot',
  standalone: true,
  imports: [CommonModule],
  template: `
    <h2>Content Projection - Multi Slot & ngProjectAs</h2>

    Default:
    <ng-content></ng-content>

    Question:
    <ng-content select="[question]"></ng-content>

    Question2:
    <ng-content select="[question2]"></ng-content>
  `
})
export class CpMultiSlotComponent {

}

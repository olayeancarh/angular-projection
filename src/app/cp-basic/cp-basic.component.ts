import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-cp-basic',
  standalone: true,
  imports: [CommonModule],
  template: `
    <h2>Content Projection - Single Slot</h2>
    <ng-content></ng-content>
  `
})
export class CpBasicComponent {

}

import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { CpBasicComponent } from './cp-basic/cp-basic.component';
import { CpMultiSlotComponent } from './cp-multi-slot/cp-multi-slot.component';
import { CpContentDirective, CpToggeleDirective } from './cp-content.directive';
import { CpConditionalProjectionComponent } from './cp-conditional-projection/cp-conditional-projection.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    CpBasicComponent,
    CpMultiSlotComponent,
    CpConditionalProjectionComponent,
    CpContentDirective,
    CpToggeleDirective
  ],
  templateUrl: './app.component.html',
})
export class AppComponent {
  title = 'angular-projection';
}

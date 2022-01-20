import { ChangeDetectionStrategy, Component } from '@angular/core';
import {
  fadeInLeftOnEnterAnimation,
  fadeInOnEnterAnimation
} from 'angular-animations';

@Component({
  selector: 'lbk-base-apparel-page',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './base-apparel-page.component.html',
  animations: [fadeInLeftOnEnterAnimation(), fadeInOnEnterAnimation()],
})
export class BaseApparelPageComponent {}

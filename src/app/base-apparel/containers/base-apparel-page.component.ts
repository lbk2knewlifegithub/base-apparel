import { ChangeDetectionStrategy, Component } from '@angular/core';
import {
  fadeInLeftOnEnterAnimation,
  fadeInRightOnEnterAnimation
} from 'angular-animations';

@Component({
  selector: 'lbk-base-apparel-page',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './base-apparel-page.component.html',
  animations: [fadeInLeftOnEnterAnimation(), fadeInRightOnEnterAnimation()],
})
export class BaseApparelPageComponent {}

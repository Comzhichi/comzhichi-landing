import { Component, input } from '@angular/core';
import { Icon } from '../icon/icon';

@Component({
  selector: 'app-logo',
  imports: [Icon],
  templateUrl: './logo.html',
  styleUrl: './logo.css',
})
export class Logo {
  readonly light = input(false);
}

import { Component, input } from '@angular/core';

export type IconName =
  | 'globe'
  | 'book'
  | 'chart'
  | 'user-check'
  | 'briefcase'
  | 'presentation'
  | 'clock'
  | 'mail'
  | 'phone'
  | 'sparkles'
  | 'calendar'
  | 'users'
  | 'database'
  | 'alert'
  | 'check'
  | 'send'
  | 'bell'
  | 'graduation'
  | 'arrow-right'
  | 'menu'
  | 'close';

@Component({
  selector: 'app-icon',
  templateUrl: './icon.html',
  styleUrl: './icon.css',
})
export class Icon {
  readonly name = input.required<IconName>();
  readonly size = input(24);
}

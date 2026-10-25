import { Component } from '@angular/core';
import { Icon } from '../icon/icon';
import { Logo } from '../logo/logo';

@Component({
  selector: 'app-footer',
  imports: [Icon, Logo],
  templateUrl: './footer.html',
  styleUrl: './footer.css',
})
export class Footer {}

import { Component, HostListener, signal } from '@angular/core';
import { Icon } from '../icon/icon';
import { Logo } from '../logo/logo';

@Component({
  selector: 'app-header',
  imports: [Logo, Icon],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {
  protected readonly menuOpen = signal(false);

  protected toggleMenu(): void {
    this.menuOpen.update((open) => !open);
  }

  protected closeMenu(): void {
    this.menuOpen.set(false);
  }

  @HostListener('document:keydown.escape')
  protected onEscape(): void {
    this.closeMenu();
  }

  @HostListener('window:resize')
  protected onResize(): void {
    if (window.innerWidth > 920) {
      this.closeMenu();
    }
  }
}

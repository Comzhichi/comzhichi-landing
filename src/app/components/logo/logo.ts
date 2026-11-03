import { DOCUMENT } from '@angular/common';
import { Component, inject, input } from '@angular/core';

@Component({
  selector: 'app-logo',
  templateUrl: './logo.html',
  styleUrl: './logo.css',
})
export class Logo {
  readonly light = input(false);
  private readonly document = inject(DOCUMENT);
  readonly logoSrc = new URL('logo.png?v=2', this.document.baseURI).href;
  readonly logoLightSrc = new URL('logo-light.png?v=1', this.document.baseURI).href;
}

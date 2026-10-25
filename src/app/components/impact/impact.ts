import { Component } from '@angular/core';
import { Icon } from '../icon/icon';

interface Stat {
  value: string;
  label: string;
}

@Component({
  selector: 'app-impact',
  imports: [Icon],
  templateUrl: './impact.html',
  styleUrl: './impact.css',
})
export class Impact {
  protected readonly stats: readonly Stat[] = [
    { value: '4', label: 'perfiles conectados' },
    { value: '6', label: 'módulos integrados' },
    { value: '1', label: 'historial por idioma' },
    { value: '100%', label: 'acceso desde el navegador' },
  ];
}

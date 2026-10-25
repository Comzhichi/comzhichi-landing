import { Component } from '@angular/core';
import { Icon } from '../icon/icon';

interface Stat {
  value: string;
  label: string;
  text: string;
}

@Component({
  selector: 'app-impact',
  imports: [Icon],
  templateUrl: './impact.html',
  styleUrl: './impact.css',
})
export class Impact {
  protected readonly stats: readonly Stat[] = [
    {
      value: '3+',
      label: 'Idiomas disponibles',
      text: 'Inglés, portugués, francés y más.',
    },
    {
      value: 'A1–C1',
      label: 'Niveles de aprendizaje',
      text: 'Una ruta clara desde principiante hasta avanzado.',
    },
    {
      value: '4',
      label: 'Pasos para empezar',
      text: 'Un proceso simple, de la consulta a tu primera clase.',
    },
    {
      value: '2',
      label: 'Perfiles de estudiantes',
      text: 'Acompañamiento para estudiantes y familias.',
    },
  ];
}

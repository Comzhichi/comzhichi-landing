import { Component } from '@angular/core';
import { Icon, type IconName } from '../icon/icon';

type IssueTone = 'purple' | 'teal' | 'amber';

interface Issue {
  icon: IconName;
  tone: IssueTone;
  title: string;
  text: string;
}

@Component({
  selector: 'app-problem',
  imports: [Icon],
  templateUrl: './problem.html',
  styleUrl: './problem.css',
})
export class Problem {
  protected readonly issues: readonly Issue[] = [
    {
      icon: 'alert',
      tone: 'purple',
      title: 'No sé por dónde empezar',
      text: 'Elegir idioma, nivel y horario puede ser confuso. Te orientamos antes de matricularte.',
    },
    {
      icon: 'users',
      tone: 'teal',
      title: 'Me da miedo hablar',
      text: 'La práctica constante y un ambiente cercano te ayudan a ganar confianza desde el inicio.',
    },
    {
      icon: 'clock',
      tone: 'amber',
      title: 'Mi horario es complicado',
      text: 'Revisamos las opciones disponibles para que el curso encaje con tu estudio, trabajo o familia.',
    },
    {
      icon: 'chart',
      tone: 'purple',
      title: 'No veo mi avance',
      text: 'En tu campus tienes notas, asistencia y evaluación final para saber qué sigue.',
    },
  ];
}

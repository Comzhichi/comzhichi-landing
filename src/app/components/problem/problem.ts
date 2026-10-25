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
      icon: 'database',
      tone: 'purple',
      title: 'Datos fragmentados',
      text: 'Matrículas, asistencia, notas y evaluaciones viven en archivos distintos, sin una vista única por estudiante.',
    },
    {
      icon: 'clock',
      tone: 'amber',
      title: 'Horarios que se cruzan',
      text: 'Asignar docentes, aulas y grupos sin traslapes exige revisar varias fuentes a mano.',
    },
    {
      icon: 'users',
      tone: 'teal',
      title: 'Familias sin visibilidad',
      text: 'Los apoderados dependen de consultas presenciales para conocer horarios, notas y avance.',
    },
    {
      icon: 'chart',
      tone: 'purple',
      title: 'Decisiones sin datos',
      text: 'La oferta del próximo ciclo se planifica sin analítica real de demanda por idioma, nivel y horario.',
    },
  ];
}

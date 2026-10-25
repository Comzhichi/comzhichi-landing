import { Component } from '@angular/core';
import { Icon, type IconName } from '../icon/icon';

interface StudentFeature {
  icon: IconName;
  title: string;
  text: string;
}

@Component({
  selector: 'app-students',
  imports: [Icon],
  templateUrl: './students.html',
  styleUrl: './students.css',
})
export class Students {
  protected readonly features: readonly StudentFeature[] = [
    {
      icon: 'calendar',
      title: 'Matrícula por nivel',
      text: 'Elige idioma, nivel y horario disponible antes de inscribirte.',
    },
    {
      icon: 'book',
      title: 'Historial por idioma',
      text: 'Cada curso conserva notas, asistencia y evaluaciones por separado.',
    },
    {
      icon: 'graduation',
      title: 'Evaluación final',
      text: 'Avanza al siguiente nivel o repite según tu resultado.',
    },
    {
      icon: 'sparkles',
      title: 'Qué te falta con IA',
      text: 'Consulta tu avance y el siguiente paso según tu historial.',
    },
  ];
}

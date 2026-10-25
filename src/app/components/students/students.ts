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
      title: 'Tus cursos y horarios',
      text: 'Consulta qué clases tienes esta semana y qué viene después.',
    },
    {
      icon: 'book',
      title: 'Notas y asistencia',
      text: 'Revisa tu desempeño y las observaciones de tus profesores.',
    },
    {
      icon: 'graduation',
      title: 'Evaluación final',
      text: 'Sabe si avanzas de nivel y qué necesitas para lograrlo.',
    },
    {
      icon: 'sparkles',
      title: 'Asistente de estudio',
      text: 'Pregunta qué practicar o qué curso te conviene según tu avance.',
    },
  ];
}

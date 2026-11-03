import { Component } from '@angular/core';
import { Icon, type IconName } from '../icon/icon';

type BenefitTone = 'purple' | 'green';

interface Benefit {
  icon: IconName;
  tone: BenefitTone;
  title: string;
  text: string;
}

@Component({
  selector: 'app-benefits',
  imports: [Icon],
  templateUrl: './benefits.html',
  styleUrl: './benefits.css',
})
export class Benefits {
  protected readonly benefits: readonly Benefit[] = [
    {
      icon: 'presentation',
      tone: 'purple',
      title: 'Metodología efectiva',
      text: 'Clases dinámicas y orientadas a la comunicación real, con objetivos claros en cada etapa.',
    },
    {
      icon: 'chart',
      tone: 'green',
      title: 'Seguimiento de tu progreso',
      text: 'Consulta tus notas, asistencia y avances en todo momento para saber cómo continuar.',
    },
    {
      icon: 'globe',
      tone: 'purple',
      title: 'Variedad de cursos',
      text: 'Inglés, portugués, francés y más, con niveles y horarios según tu objetivo.',
    },
    {
      icon: 'graduation',
      tone: 'green',
      title: 'Profesores especializados',
      text: 'Docentes con experiencia que explican, corrigen y acompañan tu aprendizaje.',
    },
  ];
}

import { Component } from '@angular/core';
import { Icon, type IconName } from '../icon/icon';

type ModuleTone = 'purple' | 'green' | 'amber';

interface Module {
  icon: IconName;
  tone: ModuleTone;
  tag: string;
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
  protected readonly modules: readonly Module[] = [
    {
      icon: 'calendar',
      tone: 'purple',
      tag: 'Operación',
      title: 'Matrícula y horarios',
      text: 'Consulta idiomas, niveles y horarios disponibles; matricula sin cruces de grupos, aulas o docentes.',
    },
    {
      icon: 'book',
      tone: 'green',
      tag: 'Trazabilidad',
      title: 'Historial por idioma',
      text: 'Un estudiante puede llevar dos idiomas en paralelo: cada curso conserva notas, asistencia y evaluaciones por separado.',
    },
    {
      icon: 'graduation',
      tone: 'amber',
      tag: 'Nivel',
      title: 'Evaluación y avance',
      text: 'Registra la evaluación final, define si el estudiante avanza o repite y conserva el historial entre ciclos. Las bajas quedan trazadas.',
    },
    {
      icon: 'presentation',
      tone: 'purple',
      tag: 'Aula',
      title: 'Gestión docente',
      text: 'Cursos y grupos asignados, asistencia sesión por sesión, calificaciones y observaciones del desempeño.',
    },
    {
      icon: 'users',
      tone: 'green',
      tag: 'Familias',
      title: 'Supervisión familiar',
      text: 'Apoderados con acceso a horarios, asistencia, notas y evaluaciones, sin depender de reportes manuales.',
    },
    {
      icon: 'chart',
      tone: 'amber',
      tag: 'Decisiones',
      title: 'Demanda y planificación',
      text: 'Reportes por idioma, nivel y horario para decidir la oferta del siguiente ciclo con datos reales.',
    },
  ];
}

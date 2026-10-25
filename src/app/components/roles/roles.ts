import { Component } from '@angular/core';
import { Icon, type IconName } from '../icon/icon';

type RoleTone = 'purple' | 'green' | 'amber';

interface Role {
  icon: IconName;
  tone: RoleTone;
  name: string;
  kicker: string;
  description: string;
  points: readonly string[];
  featured?: boolean;
}

@Component({
  selector: 'app-roles',
  imports: [Icon],
  templateUrl: './roles.html',
  styleUrl: './roles.css',
})
export class Roles {
  protected readonly roles: readonly Role[] = [
    {
      icon: 'graduation',
      tone: 'purple',
      name: 'Estudiantes',
      kicker: 'Matrícula y avance',
      description:
        'Matricúlate por idioma y nivel, revisa horarios y sigue tu historial. Al cerrar el nivel, tu evaluación final define si avanzas o repites.',
      points: [
        'Matrícula por idioma y nivel',
        'Historial completo entre ciclos',
        'Evaluación final: avanza o repite',
      ],
    },
    {
      icon: 'users',
      tone: 'green',
      name: 'Apoderados',
      kicker: 'Seguimiento familiar',
      description:
        'Sigue horarios, asistencia, notas y evaluaciones de tu representado, sin depender de consultas presenciales.',
      points: [
        'Horarios y asistencia al día',
        'Notas y evaluaciones por idioma',
        'Historial académico visible',
      ],
    },
    {
      icon: 'presentation',
      tone: 'amber',
      name: 'Docentes',
      kicker: 'Gestión de aula',
      description:
        'Revisa tus cursos y grupos asignados y registra asistencia, notas y observaciones en un solo flujo.',
      points: [
        'Cursos y grupos asignados',
        'Asistencia, notas y observaciones',
        'Evaluaciones de fin de nivel',
      ],
    },
    {
      icon: 'chart',
      tone: 'purple',
      name: 'Coordinadores',
      kicker: 'Administración y analítica',
      description:
        'Crea la oferta, asigna docentes por especialidad, organiza horarios y planifica el siguiente ciclo con datos reales.',
      points: [
        'Alta de idiomas, niveles y cursos',
        'Docentes por especialidad y horarios sin cruces',
        'Reportes de demanda y gestión de bajas',
      ],
      featured: true,
    },
  ];
}

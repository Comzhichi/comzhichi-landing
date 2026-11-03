import { Component } from '@angular/core';
import { Icon, type IconName } from '../icon/icon';

type ProgramTone = 'purple' | 'green' | 'amber';

interface Program {
  icon: IconName;
  tone: ProgramTone;
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
  protected readonly programs: readonly Program[] = [
    {
      icon: 'book',
      tone: 'green',
      name: 'Niños',
      kicker: 'Primeros pasos',
      description:
        'Un espacio para descubrir el idioma con actividades dinámicas, confianza y acompañamiento cercano.',
      points: [
        'Aprendizaje con actividades prácticas',
        'Confianza para empezar a hablar',
        'Seguimiento para padres y apoderados',
      ],
    },
    {
      icon: 'graduation',
      tone: 'amber',
      name: 'Adolescentes',
      kicker: 'Refuerzo y confianza',
      description:
        'Mejora tu nivel, refuerza lo que aprendes en el colegio y gana seguridad para comunicarte.',
      points: [
        'Apoyo para tus estudios',
        'Práctica de conversación',
        'Evaluación de avance por nivel',
      ],
    },
    {
      icon: 'briefcase',
      tone: 'purple',
      name: 'Jóvenes y adultos',
      kicker: 'Estudios, trabajo y viajes',
      description: 'Aprende a tu ritmo para alcanzar metas académicas, profesionales o personales.',
      points: [
        'Objetivos claros desde el inicio',
        'Opciones de horario para tu rutina',
        'Niveles desde cero hasta avanzado',
      ],
      featured: true,
    },
    {
      icon: 'users',
      tone: 'green',
      name: 'Padres y familias',
      kicker: 'Acompañamiento',
      description:
        'Encuentra el curso adecuado para tu hijo o hija y sigue su avance desde la plataforma.',
      points: [
        'Orientación durante la matrícula',
        'Visibilidad del progreso académico',
        'Comunicación con docentes y coordinación',
      ],
    },
  ];
}

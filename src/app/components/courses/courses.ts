import { Component } from '@angular/core';
import { Icon } from '../icon/icon';

type CourseTone = 'purple' | 'teal' | 'amber' | 'neutral';

interface Course {
  code: string;
  name: string;
  kicker: string;
  description: string;
  levels: string;
  points: readonly string[];
  tone: CourseTone;
  cta: string;
  href: string;
  featured?: boolean;
}

@Component({
  selector: 'app-courses',
  imports: [Icon],
  templateUrl: './courses.html',
  styleUrl: './courses.css',
})
export class Courses {
  protected readonly courses: readonly Course[] = [
    {
      code: 'EN',
      name: 'Inglés',
      kicker: 'Para estudiar, trabajar y viajar',
      description:
        'Desarrolla la seguridad que necesitas para comunicarte en contextos académicos, profesionales y cotidianos.',
      levels: 'Todos los niveles',
      points: ['Conversación desde el inicio', 'Refuerzo para tus estudios', 'Inglés para viajar'],
      tone: 'purple',
      cta: 'Consultar horarios',
      href: 'mailto:informes@comich.edu.pe?subject=Informaci%C3%B3n%20de%20cursos%20de%20ingl%C3%A9s',
      featured: true,
    },
    {
      code: 'PT',
      name: 'Portugués',
      kicker: 'Para conectar con nuevas culturas',
      description:
        'Aprende portugués con un enfoque comunicativo y descubre una de las lenguas más habladas del mundo.',
      levels: 'Todos los niveles',
      points: ['Base sólida desde cero', 'Conversación y cultura', 'Portugués para viajar'],
      tone: 'teal',
      cta: 'Consultar horarios',
      href: 'mailto:informes@comich.edu.pe?subject=Informaci%C3%B3n%20de%20cursos%20de%20portugu%C3%A9s',
    },
    {
      code: 'FR',
      name: 'Francés',
      kicker: 'Para ampliar tus horizontes',
      description:
        'Gana confianza para comunicarte en francés en viajes, estudios o proyectos personales.',
      levels: 'Todos los niveles',
      points: ['Pronunciación y práctica oral', 'Francés para viajar', 'Grupos por nivel'],
      tone: 'amber',
      cta: 'Consultar horarios',
      href: 'mailto:informes@comich.edu.pe?subject=Informaci%C3%B3n%20de%20cursos%20de%20franc%C3%A9s',
    },
    {
      code: '+',
      name: '¿Otro idioma?',
      kicker: 'Cuéntanos qué buscas',
      description:
        'Escríbenos si quieres aprender otro idioma. Revisamos disponibilidad, niveles y horarios para orientarte.',
      levels: 'Según disponibilidad',
      points: ['Orientación personalizada', 'Revisamos tu caso', 'Te contamos las opciones'],
      tone: 'neutral',
      cta: 'Consultar disponibilidad',
      href: 'mailto:informes@comich.edu.pe?subject=Consulta%20por%20otro%20idioma',
    },
  ];
}

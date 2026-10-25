import { Component } from '@angular/core';
import { Icon } from '../icon/icon';

interface FaqItem {
  question: string;
  answer: string;
}

@Component({
  selector: 'app-faq',
  imports: [Icon],
  templateUrl: './faq.html',
  styleUrl: './faq.css',
})
export class Faq {
  protected readonly items: readonly FaqItem[] = [
    {
      question: '¿Cómo sé qué nivel me corresponde?',
      answer:
        'No necesitas saberlo de antemano. Cuéntanos tu experiencia con el idioma y te orientamos para ubicarte en el grupo adecuado, ya sea que empieces desde cero o quieras continuar desde un nivel intermedio.',
    },
    {
      question: '¿Qué idiomas puedo estudiar?',
      answer:
        'Tenemos cursos de inglés, portugués, francés y otros idiomas. Escríbenos si buscas uno en particular y te confirmamos disponibilidad, niveles y horarios.',
    },
    {
      question: '¿Hay cursos para niños y adolescentes?',
      answer:
        'Sí. Contamos con programas adaptados a distintas edades, con actividades y objetivos pensados para cada etapa. Los padres y apoderados pueden acompañar el avance desde su propio acceso.',
    },
    {
      question: '¿Cómo elijo mi horario?',
      answer:
        'Al consultar, revisamos las opciones disponibles para tu nivel. Así puedes encontrar un horario compatible con tus estudios, tu trabajo o tu rutina familiar.',
    },
    {
      question: '¿Qué pasa si ya sé algo del idioma?',
      answer:
        'Te orientamos para continuar en el nivel adecuado. No tienes que empezar desde cero si ya tienes bases: buscamos el grupo que mejor se ajuste a tu conocimiento actual.',
    },
    {
      question: '¿Cómo se evalúa mi avance?',
      answer:
        'Tus profesores registran asistencia, notas y observaciones durante el curso. Al cerrar el nivel, la evaluación final define si avanzas al siguiente o si necesitas reforzar algunos contenidos.',
    },
    {
      question: '¿Puedo estudiar más de un idioma a la vez?',
      answer:
        'Sí. Cada curso conserva su propio historial de notas, asistencia y evaluaciones, para que el avance en un idioma no se mezcle con el del otro.',
    },
    {
      question: '¿Los padres pueden ver el progreso de sus hijos?',
      answer:
        'Sí. Los apoderados tienen acceso a horarios, asistencia, notas y evaluaciones de su representado, sin depender de consultas presenciales.',
    },
  ];
}

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
      question: '¿Comzhichi es solo para el equipo académico?',
      answer:
        'No. La plataforma está pensada para estudiantes, apoderados, docentes y coordinadores. Cada perfil tiene su propio acceso y permisos, pero todos trabajan sobre la misma información.',
    },
    {
      question: '¿Puedo estudiar o matricularme desde la plataforma?',
      answer:
        'Sí. Los estudiantes pueden matricularse según idioma y nivel, consultar horarios disponibles, revisar su historial y ver el resultado de su evaluación final. Si aún no perteneces a un centro, escríbenos y te orientamos sobre los cursos disponibles.',
    },
    {
      question: '¿Puedo llevar más de un idioma a la vez?',
      answer:
        'Sí. Cada idioma conserva un historial independiente de notas, asistencia y evaluaciones, para que el avance en uno no se mezcle con el de otro.',
    },
    {
      question: '¿Qué pasa al terminar un nivel?',
      answer:
        'El docente registra la evaluación final. Si el estudiante aprueba, avanza al siguiente nivel; si no, repite el nivel. El resultado queda en su historial por idioma y el apoderado puede consultarlo.',
    },
    {
      question: '¿Cómo se asignan docentes y horarios?',
      answer:
        'El coordinador asigna docentes según el idioma y su especialidad, y organiza los horarios validando que no haya cruces entre grupos, aulas o estudiantes. El agente de IA también puede revisar la disponibilidad antes de confirmar.',
    },
    {
      question: '¿Cómo funciona el agente de IA?',
      answer:
        'El agente interpreta instrucciones en lenguaje natural, consulta la disponibilidad real y ejecuta acciones mediante tool calling: validar cruces, recomendar si el estudiante avanza o repite, resumir el rendimiento de un grupo o registrar una matrícula, siempre según los permisos del usuario.',
    },
    {
      question: '¿Qué incluye el MVP?',
      answer:
        'Accesos por rol, alta de idiomas, niveles, cursos y grupos, matrículas y bajas, horarios y asignación docente, asistencia, calificaciones, observaciones, evaluación de fin de nivel, historial académico entre ciclos, reportes de demanda y el agente de IA.',
    },
    {
      question: '¿Incluye pagos, videollamadas o integraciones con LMS?',
      answer:
        'No por ahora. El MVP se enfoca en la gestión académica y administrativa. Pagos online, videollamadas, aulas virtuales y sincronización con plataformas como Moodle o Canvas quedan fuera del alcance inicial.',
    },
  ];
}

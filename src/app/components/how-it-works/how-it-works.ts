import { Component } from '@angular/core';
import { Icon, type IconName } from '../icon/icon';

type TrackTone = 'student' | 'center';

interface TrackStep {
  title: string;
  text: string;
}

interface Track {
  tone: TrackTone;
  icon: IconName;
  label: string;
  title: string;
  steps: readonly TrackStep[];
  ctaLabel: string;
  ctaHref: string;
}

@Component({
  selector: 'app-how-it-works',
  imports: [Icon],
  templateUrl: './how-it-works.html',
  styleUrl: './how-it-works.css',
})
export class HowItWorks {
  protected readonly tracks: readonly Track[] = [
    {
      tone: 'student',
      icon: 'graduation',
      label: 'Para estudiantes',
      title: 'Tu ruta, sin enredos.',
      steps: [
        {
          title: 'Encuentra tu nivel',
          text: 'Consulta idiomas, niveles y horarios disponibles antes de matricularte.',
        },
        {
          title: 'Matricúlate sin cruces',
          text: 'Elige tu curso y valida que no choque con tus otros idiomas.',
        },
        {
          title: 'Aprende, evalúa y avanza',
          text: 'Revisa asistencia, notas y observaciones; al cerrar el nivel, rinde tu evaluación final para avanzar o repetir.',
        },
      ],
      ctaLabel: 'Quiero estudiar',
      ctaHref: 'mailto:informes@comich.edu.pe?subject=Quiero%20estudiar%20en%20Comzhichi',
    },
    {
      tone: 'center',
      icon: 'briefcase',
      label: 'Para el centro',
      title: 'Tu operación, bajo control.',
      steps: [
        {
          title: 'Configura la oferta',
          text: 'Registra idiomas, niveles, cursos, grupos, aulas y especialidades docentes.',
        },
        {
          title: 'Asigna docentes y horarios',
          text: 'Asigna profesores por idioma y disponibilidad, validando cruces de grupos y aulas.',
        },
        {
          title: 'Monitorea y planifica',
          text: 'Cierra niveles, registra bajas y exporta reportes de demanda para el siguiente ciclo.',
        },
      ],
      ctaLabel: 'Solicitar demo',
      ctaHref: '#demo',
    },
  ];
}

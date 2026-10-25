import { Component } from '@angular/core';
import { Icon, type IconName } from '../icon/icon';

interface Capability {
  icon: IconName;
  title: string;
  text: string;
}

@Component({
  selector: 'app-ai-agent',
  imports: [Icon],
  templateUrl: './ai-agent.html',
  styleUrl: './ai-agent.css',
})
export class AiAgent {
  protected readonly capabilities: readonly Capability[] = [
    {
      icon: 'book',
      title: 'Recomienda tu siguiente curso',
      text: 'Te ayuda a encontrar el idioma y el nivel que encajan contigo.',
    },
    {
      icon: 'chart',
      title: 'Explica tu avance',
      text: 'Resume tus notas, asistencia y evaluación final en lenguaje claro.',
    },
    {
      icon: 'sparkles',
      title: 'Te dice qué practicar',
      text: 'Sugiere actividades según lo que necesitas reforzar.',
    },
    {
      icon: 'calendar',
      title: 'Resuelve dudas del campus',
      text: 'Te indica dónde ver horarios, notas o tu siguiente clase.',
    },
  ];
}

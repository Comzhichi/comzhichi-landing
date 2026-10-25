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
      icon: 'calendar',
      title: 'Valida cruces de horario',
      text: 'Consulta disponibilidad de grupos, aulas y docentes antes de confirmar.',
    },
    {
      icon: 'graduation',
      title: 'Sugiere avanzar o repetir',
      text: 'Analiza notas, asistencia y evaluación final para recomendar el siguiente paso.',
    },
    {
      icon: 'book',
      title: 'Explica qué falta para avanzar',
      text: 'Resume el historial de un estudiante y responde en lenguaje natural.',
    },
    {
      icon: 'sparkles',
      title: 'Ejecuta acciones',
      text: 'Matricula, da de baja o asigna docentes a partir de una instrucción escrita.',
    },
  ];
}

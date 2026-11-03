import { Component } from '@angular/core';

interface Step {
  title: string;
  text: string;
}

@Component({
  selector: 'app-how-it-works',
  templateUrl: './how-it-works.html',
  styleUrl: './how-it-works.css',
})
export class HowItWorks {
  protected readonly steps: readonly Step[] = [
    {
      title: 'Cuéntanos tu objetivo',
      text: 'Escríbenos y dinos qué idioma quieres aprender y para qué: estudios, trabajo, viajes o crecimiento personal.',
    },
    {
      title: 'Encuentra tu nivel',
      text: 'Revisa cursos y horarios; te orientamos para elegir el grupo que mejor se adapte a ti.',
    },
    {
      title: 'Matricúlate',
      text: 'Confirma tu horario y completa tu matrícula con el acompañamiento de nuestro equipo.',
    },
    {
      title: 'Empieza a aprender',
      text: 'Asiste a clases, practica desde el primer día y sigue tu progreso paso a paso.',
    },
  ];
}

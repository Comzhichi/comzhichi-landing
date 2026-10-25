import { Component } from '@angular/core';
import { AiAgent } from './components/ai-agent/ai-agent';
import { Benefits } from './components/benefits/benefits';
import { Cta } from './components/cta/cta';
import { Faq } from './components/faq/faq';
import { Footer } from './components/footer/footer';
import { Header } from './components/header/header';
import { Hero } from './components/hero/hero';
import { HowItWorks } from './components/how-it-works/how-it-works';
import { Impact } from './components/impact/impact';
import { Problem } from './components/problem/problem';
import { Roles } from './components/roles/roles';
import { Students } from './components/students/students';

@Component({
  selector: 'app-root',
  imports: [
    Header,
    Hero,
    Students,
    Problem,
    Benefits,
    Roles,
    AiAgent,
    HowItWorks,
    Impact,
    Faq,
    Cta,
    Footer,
  ],
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {}

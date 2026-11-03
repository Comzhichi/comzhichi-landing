import { Component } from '@angular/core';
import { Benefits } from './components/benefits/benefits';
import { Footer } from './components/footer/footer';
import { Header } from './components/header/header';
import { Hero } from './components/hero/hero';
import { HowItWorks } from './components/how-it-works/how-it-works';
import { Impact } from './components/impact/impact';

@Component({
  selector: 'app-root',
  imports: [Header, Hero, Benefits, HowItWorks, Impact, Footer],
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {}

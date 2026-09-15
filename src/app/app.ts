import { Component, signal } from '@angular/core';
import {LandingPage} from './presentation/landing/landing';

@Component({
  selector: 'app-root',
  imports: [ LandingPage],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('foodsave-landing');
}

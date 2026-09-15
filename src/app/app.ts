import { Component, signal } from '@angular/core';
import {LandingPage} from './presentation/landing/landing';
import {SiteFooter} from './presentation/shared/layout/site-footer/site-footer';
import {SiteHeader} from './presentation/shared/layout/site-header/site-header';

@Component({
  selector: 'app-root',
  imports: [LandingPage, SiteFooter, SiteHeader],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('foodsave-landing');
}

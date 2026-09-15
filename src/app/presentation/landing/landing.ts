import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { LandingFacade } from '../../application/landing/landing.facade';
import { LandingLayout } from '../shared/layout/landing-layout/landing-layout';

@Component({
  selector: 'fs-landing-page',
  imports: [FormsModule, LandingLayout],
  templateUrl: './landing.html',
  styleUrl: './landing.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LandingPage {
  readonly facade = inject(LandingFacade);
  readonly contactName = signal('');
  readonly email = signal('');
  readonly phone = signal('');
  readonly submitted = signal(false);
  readonly formError = signal('');

  readonly teamMembers = [
    { initials: 'GP', name: 'Giuliano Angel Peláez Vargas', role: 'Software Engineering' },
    { initials: 'JH', name: 'José Maria Huayra Moreyra', role: 'Software Engineering' },
    { initials: 'XY', name: 'Xin Yu Shi Lin', role: 'Software Engineering' },
    { initials: 'BM', name: 'Bryan Félix Martínez Ramos', role: 'Software Engineering' }
  ] as const;

  openInterest(audience: 'customer' | 'business'): void {
    this.submitted.set(false);
    this.formError.set('');
    this.facade.openInterestDialog(audience);
  }

  closeInterest(): void { this.facade.closeInterestDialog(); }

  submitInterest(): void {
    const needsBusinessFields = this.facade.audience() === 'business';
    const validEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(this.email().trim());

    if (!validEmail || (needsBusinessFields && (!this.contactName().trim() || !this.phone().trim()))) {
      this.formError.set(needsBusinessFields
        ? 'Completa el nombre, correo y teléfono de contacto para continuar.'
        : 'Ingresa un correo electrónico válido para continuar.');
      return;
    }

    this.formError.set('');
    this.submitted.set(true);
    this.contactName.set('');
    this.email.set('');
    this.phone.set('');
  }
}

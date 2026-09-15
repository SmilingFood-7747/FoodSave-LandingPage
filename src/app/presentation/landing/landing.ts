import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { LandingFacade } from '../../application/landing/landing.facade';

@Component({
  selector: 'fs-landing-page',
  imports: [FormsModule, RouterLink],
  templateUrl: './landing.html',
  styleUrl: './landing.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LandingPage {
  readonly facade = inject(LandingFacade);
  readonly email = signal('');
  readonly submitted = signal(false);

  openInterest(audience: 'customer' | 'business'): void { this.submitted.set(false); this.facade.openInterestDialog(audience); }
  closeInterest(): void { this.facade.closeInterestDialog(); }
  submitInterest(): void { if (this.email().trim()) { this.submitted.set(true); this.email.set(''); } }
}

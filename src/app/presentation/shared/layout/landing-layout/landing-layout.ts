import { ChangeDetectionStrategy, Component, EventEmitter, Output } from '@angular/core';
import { Audience } from '../../../../application/landing/landing.facade';
import { SiteFooter } from '../site-footer/site-footer';
import { SiteHeader } from '../site-header/site-header';

@Component({
  selector: 'fs-landing-layout',
  imports: [SiteHeader, SiteFooter],
  templateUrl: './landing-layout.html',
  styleUrl: './landing-layout.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LandingLayout {
  @Output() readonly interestRequested = new EventEmitter<Audience>();

  forwardInterestRequest(audience: Audience): void {
    this.interestRequested.emit(audience);
  }
}

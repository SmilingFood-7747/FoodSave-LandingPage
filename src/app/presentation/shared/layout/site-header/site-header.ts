import { ChangeDetectionStrategy, Component, EventEmitter, Output } from '@angular/core';
import { Audience } from '../../../../application/landing/landing.facade';

@Component({
  selector: 'fs-site-header',
  templateUrl: './site-header.html',
  styleUrl: './site-header.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SiteHeader {
  @Output() readonly interestRequested = new EventEmitter<Audience>();

  requestInterest(audience: Audience): void {
    this.interestRequested.emit(audience);
  }
}

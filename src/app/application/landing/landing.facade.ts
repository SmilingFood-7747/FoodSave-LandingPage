import { Injectable, computed, signal } from '@angular/core';
import { Offer } from '../../domain/offer/offer';
import { InMemoryOfferRepository } from '../../infrastructure/offer/in-memory-offer.repository';

export type Audience = 'customer' | 'business';

@Injectable({ providedIn: 'root' })
export class LandingFacade {
  private readonly audienceSignal = signal<Audience>('customer');
  private readonly dialogSignal = signal(false);

  readonly audience = this.audienceSignal.asReadonly();
  readonly dialogOpen = this.dialogSignal.asReadonly();

  readonly featuredOffer: Offer;
  readonly formattedDistance;

  constructor(private readonly offerRepository: InMemoryOfferRepository) {
    this.featuredOffer = this.offerRepository.featured();
    this.formattedDistance = computed(() => `${this.featuredOffer.distanceKm.toFixed(1)} km`);
  }

  openInterestDialog(audience: Audience): void {
    this.audienceSignal.set(audience);
    this.dialogSignal.set(true);
  }

  closeInterestDialog(): void {
    this.dialogSignal.set(false);
  }
}

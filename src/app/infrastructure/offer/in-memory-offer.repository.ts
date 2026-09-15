import { Injectable } from '@angular/core';
import { Offer } from '../../domain/offer/offer';
import { OfferRepository } from '../../domain/offer/offer.repository';

@Injectable({ providedIn: 'root' })
export class InMemoryOfferRepository extends OfferRepository {
  featured(): Offer {
    return { restaurant: 'La Bodega Verde', title: 'Seasonal lunch bowl', originalPrice: 32, discountedPrice: 18, currency: 'PEN', pickupTime: '7:30 PM', distanceKm: 0.7, discountPercent: 44 };
  }
}

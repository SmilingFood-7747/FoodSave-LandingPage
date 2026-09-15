import { Offer } from './offer';

export abstract class OfferRepository {
  abstract featured(): Offer;
}

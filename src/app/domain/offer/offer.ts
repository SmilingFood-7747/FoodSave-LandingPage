export interface Offer {
  readonly restaurant: string;
  readonly title: string;
  readonly originalPrice: number;
  readonly discountedPrice: number;
  readonly currency: 'PEN';
  readonly pickupTime: string;
  readonly distanceKm: number;
  readonly discountPercent: number;
}

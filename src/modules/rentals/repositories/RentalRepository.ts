import { Rental } from '../domain/Rental';

export interface RentalRepository {
  save(rental: Rental): Promise<void>;
}

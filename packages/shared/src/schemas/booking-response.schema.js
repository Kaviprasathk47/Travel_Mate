import { z } from 'zod';
import { BookingStatus } from '../enums/booking-status.js';
import { passengerSchema } from './create-booking.schema.js';

/**
 * Zod schema for flight booking responses.
 */
export const bookingResponseSchema = z.object({
  id: z.string().trim().min(1, 'id is required'),
  bookingReference: z.string().trim().min(1, 'bookingReference is required'),
  flightId: z.string().trim().min(1, 'flightId is required'),
  passengers: z.array(passengerSchema).min(1, 'At least one passenger is required'),
  seatCount: z.number().int('seatCount must be an integer').positive('seatCount must be at least 1'),
  pricePerSeatPaise: z.number().int('pricePerSeatPaise must be an integer').nonnegative('pricePerSeatPaise cannot be negative'),
  totalAmountPaise: z.number().int('totalAmountPaise must be an integer').nonnegative('totalAmountPaise cannot be negative'),
  currency: z.literal('INR'),
  status: z.enum([BookingStatus.CONFIRMED, BookingStatus.CANCELLED]),
  createdAt: z.string().datetime('createdAt must be a valid ISO date-time string')
});

export const BookingResponseSchema = bookingResponseSchema;


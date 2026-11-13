import { z } from 'zod';

/**
 * Zod schema for a single passenger.
 */
export const passengerSchema = z.object({
  firstName: z
    .string()
    .trim()
    .min(1, 'Passenger first name is required'),
  lastName: z
    .string()
    .trim()
    .min(1, 'Passenger last name is required')
});

/**
 * Zod schema for booking contact details.
 */
export const contactDetailsSchema = z.object({
  email: z
    .string()
    .trim()
    .email('Invalid email address'),
  phone: z
    .string()
    .trim()
    .min(1, 'Contact phone number is required')
});

/**
 * Zod schema for creating a flight booking.
 */
export const createBookingSchema = z.object({
  idempotencyKey: z
    .string()
    .trim()
    .min(1, 'idempotencyKey must be a non-empty string'),
  flightId: z
    .string()
    .trim()
    .min(1, 'flightId must be a non-empty string'),
  passengers: z
    .array(passengerSchema)
    .min(1, 'At least one passenger is required'),
  contactDetails: contactDetailsSchema
});

export const CreateBookingSchema = createBookingSchema;
export const PassengerSchema = passengerSchema;
export const ContactDetailsSchema = contactDetailsSchema;


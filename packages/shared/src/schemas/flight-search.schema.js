import { z } from 'zod';

/**
 * Validates that a date string in YYYY-MM-DD format is an actual calendar date.
 * Rejects non-existent dates such as 2026-02-30 or 2026-15-40.
 *
 * @param {string} dateStr
 * @returns {boolean}
 */
function isValidCalendarDate(dateStr) {
  if (!/^\d{4}-\d{2}-\d{2}$/.test(dateStr)) {
    return false;
  }
  const [year, month, day] = dateStr.split('-').map(Number);
  const parsed = new Date(Date.UTC(year, month - 1, day));
  return (
    parsed.getUTCFullYear() === year &&
    parsed.getUTCMonth() === month - 1 &&
    parsed.getUTCDate() === day
  );
}

/**
 * Zod schema for flight search query parameters.
 */
export const flightSearchSchema = z.object({
  originAirportCode: z
    .string({ required_error: 'Origin airport code is required' })
    .trim()
    .regex(/^[A-Za-z]{3}$/, 'Origin airport code must be exactly 3 alphabetic characters')
    .toUpperCase(),
  destinationAirportCode: z
    .string({ required_error: 'Destination airport code is required' })
    .trim()
    .regex(/^[A-Za-z]{3}$/, 'Destination airport code must be exactly 3 alphabetic characters')
    .toUpperCase(),
  departureDate: z
    .string({ required_error: 'Departure date is required' })
    .trim()
    .regex(/^\d{4}-\d{2}-\d{2}$/, 'Departure date must be in YYYY-MM-DD format')
    .refine(isValidCalendarDate, {
      message: 'Departure date must be a valid calendar date'
    }),
  passengerCount: z
    .number({ required_error: 'Passenger count is required' })
    .int('Passenger count must be an integer')
    .positive('Passenger count must be at least 1')
});

import { FlightStatus } from '../enums/flight-status.js';
import { BookingStatus } from '../enums/booking-status.js';

/**
 * @typedef {keyof typeof FlightStatus} FlightStatusType
 */

/**
 * @typedef {keyof typeof BookingStatus} BookingStatusType
 */

/**
 * @typedef {Object} Passenger
 * @property {string} firstName - Passenger's first name
 * @property {string} lastName - Passenger's last name
 */

/**
 * @typedef {Object} ContactDetails
 * @property {string} email - Contact email address
 * @property {string} phone - Contact phone number
 */

/**
 * @typedef {Object} FlightSearchDTO
 * @property {string} originAirportCode - 3-letter IATA origin airport code
 * @property {string} destinationAirportCode - 3-letter IATA destination airport code
 * @property {string} departureDate - Departure date in YYYY-MM-DD format
 * @property {number} passengerCount - Positive integer of seats requested
 */

/**
 * @typedef {Object} CreateBookingDTO
 * @property {string} idempotencyKey - Unique key to prevent duplicate booking requests
 * @property {string} flightId - Target flight identifier
 * @property {Passenger[]} passengers - Array of passengers (at least one)
 * @property {ContactDetails} contactDetails - Primary contact details
 */

/**
 * @typedef {Object} BookingResponseDTO
 * @property {string} id - Unique booking record identifier
 * @property {string} bookingReference - 6-character PNR code
 * @property {string} flightId - Booked flight identifier
 * @property {Passenger[]} passengers - List of passengers included in this booking
 * @property {number} seatCount - Total seats booked
 * @property {number} pricePerSeatPaise - Price per seat in paise (INR)
 * @property {number} totalAmountPaise - Total booking price in paise (INR)
 * @property {"INR"} currency - Booking currency
 * @property {BookingStatusType} status - Current booking status
 * @property {string} createdAt - ISO date-time string of booking creation
 */

/**
 * @typedef {Object} Flight
 * @property {string} id - Unique flight identifier
 * @property {string} flightNumber - Flight schedule code (e.g. "6E205")
 * @property {string} airlineId - Operating airline identifier
 * @property {string} originAirportId - Origin airport identifier
 * @property {string} destinationAirportId - Destination airport identifier
 * @property {string} departureTime - ISO date string of departure
 * @property {string} arrivalTime - ISO date string of arrival
 * @property {number} durationMinutes - Total flight duration in minutes
 * @property {number} totalSeats - Total seat capacity
 * @property {number} availableSeats - Available seat capacity
 * @property {number} pricePaise - Price per seat in paise (INR)
 * @property {"INR"} currency - Currency code
 * @property {FlightStatusType} status - Operational status of the flight
 */

export {};

